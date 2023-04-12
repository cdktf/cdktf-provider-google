# `memcacheInstance` Submodule <a name="`memcacheInstance` Submodule" id="@cdktf/provider-google.memcacheInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MemcacheInstance <a name="MemcacheInstance" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/memcache_instance google_memcache_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/memcacheinstance"

memcacheinstance.NewMemcacheInstance(scope Construct, id *string, config MemcacheInstanceConfig) MemcacheInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig">MemcacheInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig">MemcacheInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.putMaintenancePolicy">PutMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.putMemcacheParameters">PutMemcacheParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.putNodeConfig">PutNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetAuthorizedNetwork">ResetAuthorizedNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetMaintenancePolicy">ResetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetMemcacheParameters">ResetMemcacheParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetMemcacheVersion">ResetMemcacheVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetZones">ResetZones</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutMaintenancePolicy` <a name="PutMaintenancePolicy" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.putMaintenancePolicy"></a>

```go
func PutMaintenancePolicy(value MemcacheInstanceMaintenancePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy">MemcacheInstanceMaintenancePolicy</a>

---

##### `PutMemcacheParameters` <a name="PutMemcacheParameters" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.putMemcacheParameters"></a>

```go
func PutMemcacheParameters(value MemcacheInstanceMemcacheParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.putMemcacheParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters">MemcacheInstanceMemcacheParameters</a>

---

##### `PutNodeConfig` <a name="PutNodeConfig" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.putNodeConfig"></a>

```go
func PutNodeConfig(value MemcacheInstanceNodeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig">MemcacheInstanceNodeConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.putTimeouts"></a>

```go
func PutTimeouts(value MemcacheInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts">MemcacheInstanceTimeouts</a>

---

##### `ResetAuthorizedNetwork` <a name="ResetAuthorizedNetwork" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetAuthorizedNetwork"></a>

```go
func ResetAuthorizedNetwork()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMaintenancePolicy` <a name="ResetMaintenancePolicy" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetMaintenancePolicy"></a>

```go
func ResetMaintenancePolicy()
```

##### `ResetMemcacheParameters` <a name="ResetMemcacheParameters" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetMemcacheParameters"></a>

```go
func ResetMemcacheParameters()
```

##### `ResetMemcacheVersion` <a name="ResetMemcacheVersion" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetMemcacheVersion"></a>

```go
func ResetMemcacheVersion()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetZones"></a>

```go
func ResetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/memcacheinstance"

memcacheinstance.MemcacheInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/memcacheinstance"

memcacheinstance.MemcacheInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/memcacheinstance"

memcacheinstance.MemcacheInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.discoveryEndpoint">DiscoveryEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference">MemcacheInstanceMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.maintenanceSchedule">MaintenanceSchedule</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList">MemcacheInstanceMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheFullVersion">MemcacheFullVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheNodes">MemcacheNodes</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList">MemcacheInstanceMemcacheNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheParameters">MemcacheParameters</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference">MemcacheInstanceMemcacheParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference">MemcacheInstanceNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference">MemcacheInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.authorizedNetworkInput">AuthorizedNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.maintenancePolicyInput">MaintenancePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy">MemcacheInstanceMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheParametersInput">MemcacheParametersInput</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters">MemcacheInstanceMemcacheParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheVersionInput">MemcacheVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nodeConfigInput">NodeConfigInput</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig">MemcacheInstanceNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.zonesInput">ZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.authorizedNetwork">AuthorizedNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheVersion">MemcacheVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DiscoveryEndpoint`<sup>Required</sup> <a name="DiscoveryEndpoint" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.discoveryEndpoint"></a>

```go
func DiscoveryEndpoint() *string
```

- *Type:* *string

---

##### `MaintenancePolicy`<sup>Required</sup> <a name="MaintenancePolicy" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.maintenancePolicy"></a>

```go
func MaintenancePolicy() MemcacheInstanceMaintenancePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference">MemcacheInstanceMaintenancePolicyOutputReference</a>

---

##### `MaintenanceSchedule`<sup>Required</sup> <a name="MaintenanceSchedule" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.maintenanceSchedule"></a>

```go
func MaintenanceSchedule() MemcacheInstanceMaintenanceScheduleList
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList">MemcacheInstanceMaintenanceScheduleList</a>

---

##### `MemcacheFullVersion`<sup>Required</sup> <a name="MemcacheFullVersion" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheFullVersion"></a>

```go
func MemcacheFullVersion() *string
```

- *Type:* *string

---

##### `MemcacheNodes`<sup>Required</sup> <a name="MemcacheNodes" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheNodes"></a>

```go
func MemcacheNodes() MemcacheInstanceMemcacheNodesList
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList">MemcacheInstanceMemcacheNodesList</a>

---

##### `MemcacheParameters`<sup>Required</sup> <a name="MemcacheParameters" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheParameters"></a>

```go
func MemcacheParameters() MemcacheInstanceMemcacheParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference">MemcacheInstanceMemcacheParametersOutputReference</a>

---

##### `NodeConfig`<sup>Required</sup> <a name="NodeConfig" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nodeConfig"></a>

```go
func NodeConfig() MemcacheInstanceNodeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference">MemcacheInstanceNodeConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.timeouts"></a>

```go
func Timeouts() MemcacheInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference">MemcacheInstanceTimeoutsOutputReference</a>

---

##### `AuthorizedNetworkInput`<sup>Optional</sup> <a name="AuthorizedNetworkInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.authorizedNetworkInput"></a>

```go
func AuthorizedNetworkInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaintenancePolicyInput`<sup>Optional</sup> <a name="MaintenancePolicyInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.maintenancePolicyInput"></a>

```go
func MaintenancePolicyInput() MemcacheInstanceMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy">MemcacheInstanceMaintenancePolicy</a>

---

##### `MemcacheParametersInput`<sup>Optional</sup> <a name="MemcacheParametersInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheParametersInput"></a>

```go
func MemcacheParametersInput() MemcacheInstanceMemcacheParameters
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters">MemcacheInstanceMemcacheParameters</a>

---

##### `MemcacheVersionInput`<sup>Optional</sup> <a name="MemcacheVersionInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheVersionInput"></a>

```go
func MemcacheVersionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodeConfigInput`<sup>Optional</sup> <a name="NodeConfigInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nodeConfigInput"></a>

```go
func NodeConfigInput() MemcacheInstanceNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig">MemcacheInstanceNodeConfig</a>

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.zonesInput"></a>

```go
func ZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuthorizedNetwork`<sup>Required</sup> <a name="AuthorizedNetwork" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.authorizedNetwork"></a>

```go
func AuthorizedNetwork() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MemcacheVersion`<sup>Required</sup> <a name="MemcacheVersion" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheVersion"></a>

```go
func MemcacheVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.zones"></a>

```go
func Zones() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MemcacheInstanceConfig <a name="MemcacheInstanceConfig" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/memcacheinstance"

&memcacheinstance.MemcacheInstanceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	NodeConfig: github.com/cdktf/cdktf-provider-google-go/google.memcacheInstance.MemcacheInstanceNodeConfig,
	NodeCount: *f64,
	AuthorizedNetwork: *string,
	DisplayName: *string,
	Id: *string,
	Labels: *map[string]*string,
	MaintenancePolicy: github.com/cdktf/cdktf-provider-google-go/google.memcacheInstance.MemcacheInstanceMaintenancePolicy,
	MemcacheParameters: github.com/cdktf/cdktf-provider-google-go/google.memcacheInstance.MemcacheInstanceMemcacheParameters,
	MemcacheVersion: *string,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.memcacheInstance.MemcacheInstanceTimeouts,
	Zones: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.name">Name</a></code> | <code>*string</code> | The resource name of the instance. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig">MemcacheInstanceNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | Number of nodes in the memcache instance. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.authorizedNetwork">AuthorizedNetwork</a></code> | <code>*string</code> | The full name of the GCE network to connect the instance to.  If not provided, 'default' will be used. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | A user-visible name for the instance. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#id MemcacheInstance#id}. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy">MemcacheInstanceMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.memcacheParameters">MemcacheParameters</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters">MemcacheInstanceMemcacheParameters</a></code> | memcache_parameters block. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.memcacheVersion">MemcacheVersion</a></code> | <code>*string</code> | The major version of Memcached software. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#project MemcacheInstance#project}. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.region">Region</a></code> | <code>*string</code> | The region of the Memcache instance. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts">MemcacheInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.zones">Zones</a></code> | <code>*[]*string</code> | Zones where memcache nodes should be provisioned.  If not provided, all zones will be used. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name of the instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#name MemcacheInstance#name}

---

##### `NodeConfig`<sup>Required</sup> <a name="NodeConfig" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.nodeConfig"></a>

```go
NodeConfig MemcacheInstanceNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig">MemcacheInstanceNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#node_config MemcacheInstance#node_config}

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

Number of nodes in the memcache instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#node_count MemcacheInstance#node_count}

---

##### `AuthorizedNetwork`<sup>Optional</sup> <a name="AuthorizedNetwork" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.authorizedNetwork"></a>

```go
AuthorizedNetwork *string
```

- *Type:* *string

The full name of the GCE network to connect the instance to.  If not provided, 'default' will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#authorized_network MemcacheInstance#authorized_network}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

A user-visible name for the instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#display_name MemcacheInstance#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#id MemcacheInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Resource labels to represent user-provided metadata.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#labels MemcacheInstance#labels}

---

##### `MaintenancePolicy`<sup>Optional</sup> <a name="MaintenancePolicy" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.maintenancePolicy"></a>

```go
MaintenancePolicy MemcacheInstanceMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy">MemcacheInstanceMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#maintenance_policy MemcacheInstance#maintenance_policy}

---

##### `MemcacheParameters`<sup>Optional</sup> <a name="MemcacheParameters" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.memcacheParameters"></a>

```go
MemcacheParameters MemcacheInstanceMemcacheParameters
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters">MemcacheInstanceMemcacheParameters</a>

memcache_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#memcache_parameters MemcacheInstance#memcache_parameters}

---

##### `MemcacheVersion`<sup>Optional</sup> <a name="MemcacheVersion" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.memcacheVersion"></a>

```go
MemcacheVersion *string
```

- *Type:* *string

The major version of Memcached software.

If not provided, latest supported version will be used.
Currently the latest supported major version is MEMCACHE_1_5. The minor version will be automatically
determined by our system based on the latest supported minor version. Default value: "MEMCACHE_1_5" Possible values: ["MEMCACHE_1_5"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#memcache_version MemcacheInstance#memcache_version}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#project MemcacheInstance#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the Memcache instance. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#region MemcacheInstance#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.timeouts"></a>

```go
Timeouts MemcacheInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts">MemcacheInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#timeouts MemcacheInstance#timeouts}

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.zones"></a>

```go
Zones *[]*string
```

- *Type:* *[]*string

Zones where memcache nodes should be provisioned.  If not provided, all zones will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#zones MemcacheInstance#zones}

---

### MemcacheInstanceMaintenancePolicy <a name="MemcacheInstanceMaintenancePolicy" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/memcacheinstance"

&memcacheinstance.MemcacheInstanceMaintenancePolicy {
	WeeklyMaintenanceWindow: interface{},
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy.property.weeklyMaintenanceWindow">WeeklyMaintenanceWindow</a></code> | <code>interface{}</code> | weekly_maintenance_window block. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy.property.description">Description</a></code> | <code>*string</code> | Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. |

---

##### `WeeklyMaintenanceWindow`<sup>Required</sup> <a name="WeeklyMaintenanceWindow" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy.property.weeklyMaintenanceWindow"></a>

```go
WeeklyMaintenanceWindow interface{}
```

- *Type:* interface{}

weekly_maintenance_window block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#weekly_maintenance_window MemcacheInstance#weekly_maintenance_window}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#description MemcacheInstance#description}

---

### MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow <a name="MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/memcacheinstance"

&memcacheinstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow {
	Day: *string,
	Duration: *string,
	StartTime: github.com/cdktf/cdktf-provider-google-go/google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.day">Day</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.duration">Duration</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | start_time block. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.day"></a>

```go
Day *string
```

- *Type:* *string

Required.

The day of week that maintenance updates occur.

* DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.
* MONDAY: Monday
* TUESDAY: Tuesday
* WEDNESDAY: Wednesday
* THURSDAY: Thursday
* FRIDAY: Friday
* SATURDAY: Saturday
* SUNDAY: Sunday Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#day MemcacheInstance#day}

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Required.

The length of the maintenance window, ranging from 3 hours to 8 hours.
A duration in seconds with up to nine fractional digits,
terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#duration MemcacheInstance#duration}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.startTime"></a>

```go
StartTime MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#start_time MemcacheInstance#start_time}

---

### MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime <a name="MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/memcacheinstance"

&memcacheinstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime {
	Hours: *f64,
	Minutes: *f64,
	Nanos: *f64,
	Seconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours">Hours</a></code> | <code>*f64</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes">Minutes</a></code> | <code>*f64</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos">Nanos</a></code> | <code>*f64</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds">Seconds</a></code> | <code>*f64</code> | Seconds of minutes of the time. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours"></a>

```go
Hours *f64
```

- *Type:* *f64

Hours of day in 24 hour format.

Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#hours MemcacheInstance#hours}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes"></a>

```go
Minutes *f64
```

- *Type:* *f64

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#minutes MemcacheInstance#minutes}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#nanos MemcacheInstance#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Seconds of minutes of the time.

Must normally be from 0 to 59.
An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#seconds MemcacheInstance#seconds}

---

### MemcacheInstanceMaintenanceSchedule <a name="MemcacheInstanceMaintenanceSchedule" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/memcacheinstance"

&memcacheinstance.MemcacheInstanceMaintenanceSchedule {

}
```


### MemcacheInstanceMemcacheNodes <a name="MemcacheInstanceMemcacheNodes" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/memcacheinstance"

&memcacheinstance.MemcacheInstanceMemcacheNodes {

}
```


### MemcacheInstanceMemcacheParameters <a name="MemcacheInstanceMemcacheParameters" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/memcacheinstance"

&memcacheinstance.MemcacheInstanceMemcacheParameters {
	Params: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters.property.params">Params</a></code> | <code>*map[string]*string</code> | User-defined set of parameters to use in the memcache process. |

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters.property.params"></a>

```go
Params *map[string]*string
```

- *Type:* *map[string]*string

User-defined set of parameters to use in the memcache process.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#params MemcacheInstance#params}

---

### MemcacheInstanceNodeConfig <a name="MemcacheInstanceNodeConfig" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/memcacheinstance"

&memcacheinstance.MemcacheInstanceNodeConfig {
	CpuCount: *f64,
	MemorySizeMb: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig.property.cpuCount">CpuCount</a></code> | <code>*f64</code> | Number of CPUs per node. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig.property.memorySizeMb">MemorySizeMb</a></code> | <code>*f64</code> | Memory size in Mebibytes for each memcache node. |

---

##### `CpuCount`<sup>Required</sup> <a name="CpuCount" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig.property.cpuCount"></a>

```go
CpuCount *f64
```

- *Type:* *f64

Number of CPUs per node.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#cpu_count MemcacheInstance#cpu_count}

---

##### `MemorySizeMb`<sup>Required</sup> <a name="MemorySizeMb" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig.property.memorySizeMb"></a>

```go
MemorySizeMb *f64
```

- *Type:* *f64

Memory size in Mebibytes for each memcache node.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#memory_size_mb MemcacheInstance#memory_size_mb}

---

### MemcacheInstanceTimeouts <a name="MemcacheInstanceTimeouts" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/memcacheinstance"

&memcacheinstance.MemcacheInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#create MemcacheInstance#create}. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#delete MemcacheInstance#delete}. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#update MemcacheInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#create MemcacheInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#delete MemcacheInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#update MemcacheInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MemcacheInstanceMaintenancePolicyOutputReference <a name="MemcacheInstanceMaintenancePolicyOutputReference" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/memcacheinstance"

memcacheinstance.NewMemcacheInstanceMaintenancePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MemcacheInstanceMaintenancePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow">PutWeeklyMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWeeklyMaintenanceWindow` <a name="PutWeeklyMaintenanceWindow" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow"></a>

```go
func PutWeeklyMaintenanceWindow(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow">WeeklyMaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput">WeeklyMaintenanceWindowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy">MemcacheInstanceMaintenancePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `WeeklyMaintenanceWindow`<sup>Required</sup> <a name="WeeklyMaintenanceWindow" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow"></a>

```go
func WeeklyMaintenanceWindow() MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `WeeklyMaintenanceWindowInput`<sup>Optional</sup> <a name="WeeklyMaintenanceWindowInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput"></a>

```go
func WeeklyMaintenanceWindowInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() MemcacheInstanceMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy">MemcacheInstanceMaintenancePolicy</a>

---


### MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList <a name="MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/memcacheinstance"

memcacheinstance.NewMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get"></a>

```go
func Get(index *f64) MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference <a name="MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/memcacheinstance"

memcacheinstance.NewMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime">PutStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStartTime` <a name="PutStartTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime"></a>

```go
func PutStartTime(value MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput">DayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day">Day</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime"></a>

```go
func StartTime() MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a>

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput"></a>

```go
func DayInput() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day"></a>

```go
func Day() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference <a name="MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/memcacheinstance"

memcacheinstance.NewMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours"></a>

```go
func ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes"></a>

```go
func ResetMinutes()
```

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos"></a>

```go
func ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds"></a>

```go
func ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput"></a>

```go
func HoursInput() *f64
```

- *Type:* *f64

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput"></a>

```go
func MinutesInput() *f64
```

- *Type:* *f64

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```go
func Minutes() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


### MemcacheInstanceMaintenanceScheduleList <a name="MemcacheInstanceMaintenanceScheduleList" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/memcacheinstance"

memcacheinstance.NewMemcacheInstanceMaintenanceScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MemcacheInstanceMaintenanceScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.get"></a>

```go
func Get(index *f64) MemcacheInstanceMaintenanceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MemcacheInstanceMaintenanceScheduleOutputReference <a name="MemcacheInstanceMaintenanceScheduleOutputReference" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/memcacheinstance"

memcacheinstance.NewMemcacheInstanceMaintenanceScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MemcacheInstanceMaintenanceScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime">ScheduleDeadlineTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceSchedule">MemcacheInstanceMaintenanceSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `ScheduleDeadlineTime`<sup>Required</sup> <a name="ScheduleDeadlineTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime"></a>

```go
func ScheduleDeadlineTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() MemcacheInstanceMaintenanceSchedule
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceSchedule">MemcacheInstanceMaintenanceSchedule</a>

---


### MemcacheInstanceMemcacheNodesList <a name="MemcacheInstanceMemcacheNodesList" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/memcacheinstance"

memcacheinstance.NewMemcacheInstanceMemcacheNodesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MemcacheInstanceMemcacheNodesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.get"></a>

```go
func Get(index *f64) MemcacheInstanceMemcacheNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MemcacheInstanceMemcacheNodesOutputReference <a name="MemcacheInstanceMemcacheNodesOutputReference" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/memcacheinstance"

memcacheinstance.NewMemcacheInstanceMemcacheNodesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MemcacheInstanceMemcacheNodesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.nodeId">NodeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodes">MemcacheInstanceMemcacheNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.nodeId"></a>

```go
func NodeId() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.internalValue"></a>

```go
func InternalValue() MemcacheInstanceMemcacheNodes
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodes">MemcacheInstanceMemcacheNodes</a>

---


### MemcacheInstanceMemcacheParametersOutputReference <a name="MemcacheInstanceMemcacheParametersOutputReference" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/memcacheinstance"

memcacheinstance.NewMemcacheInstanceMemcacheParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MemcacheInstanceMemcacheParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.resetParams">ResetParams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParams` <a name="ResetParams" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.resetParams"></a>

```go
func ResetParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.paramsInput">ParamsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.params">Params</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters">MemcacheInstanceMemcacheParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.paramsInput"></a>

```go
func ParamsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.params"></a>

```go
func Params() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() MemcacheInstanceMemcacheParameters
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters">MemcacheInstanceMemcacheParameters</a>

---


### MemcacheInstanceNodeConfigOutputReference <a name="MemcacheInstanceNodeConfigOutputReference" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/memcacheinstance"

memcacheinstance.NewMemcacheInstanceNodeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MemcacheInstanceNodeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.cpuCountInput">CpuCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.memorySizeMbInput">MemorySizeMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.cpuCount">CpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.memorySizeMb">MemorySizeMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig">MemcacheInstanceNodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuCountInput`<sup>Optional</sup> <a name="CpuCountInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.cpuCountInput"></a>

```go
func CpuCountInput() *f64
```

- *Type:* *f64

---

##### `MemorySizeMbInput`<sup>Optional</sup> <a name="MemorySizeMbInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.memorySizeMbInput"></a>

```go
func MemorySizeMbInput() *f64
```

- *Type:* *f64

---

##### `CpuCount`<sup>Required</sup> <a name="CpuCount" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.cpuCount"></a>

```go
func CpuCount() *f64
```

- *Type:* *f64

---

##### `MemorySizeMb`<sup>Required</sup> <a name="MemorySizeMb" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.memorySizeMb"></a>

```go
func MemorySizeMb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() MemcacheInstanceNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig">MemcacheInstanceNodeConfig</a>

---


### MemcacheInstanceTimeoutsOutputReference <a name="MemcacheInstanceTimeoutsOutputReference" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/memcacheinstance"

memcacheinstance.NewMemcacheInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MemcacheInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



