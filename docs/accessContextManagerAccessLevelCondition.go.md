# `accessContextManagerAccessLevelCondition` Submodule <a name="`accessContextManagerAccessLevelCondition` Submodule" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerAccessLevelCondition <a name="AccessContextManagerAccessLevelCondition" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_level_condition google_access_context_manager_access_level_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanageraccesslevelcondition"

accesscontextmanageraccesslevelcondition.NewAccessContextManagerAccessLevelCondition(scope Construct, id *string, config AccessContextManagerAccessLevelConditionConfig) AccessContextManagerAccessLevelCondition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig">AccessContextManagerAccessLevelConditionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig">AccessContextManagerAccessLevelConditionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putDevicePolicy">PutDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetDevicePolicy">ResetDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetIpSubnetworks">ResetIpSubnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetMembers">ResetMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetNegate">ResetNegate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetRegions">ResetRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetRequiredAccessLevels">ResetRequiredAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDevicePolicy` <a name="PutDevicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putDevicePolicy"></a>

```go
func PutDevicePolicy(value AccessContextManagerAccessLevelConditionDevicePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putDevicePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy">AccessContextManagerAccessLevelConditionDevicePolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putTimeouts"></a>

```go
func PutTimeouts(value AccessContextManagerAccessLevelConditionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts">AccessContextManagerAccessLevelConditionTimeouts</a>

---

##### `ResetDevicePolicy` <a name="ResetDevicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetDevicePolicy"></a>

```go
func ResetDevicePolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetId"></a>

```go
func ResetId()
```

##### `ResetIpSubnetworks` <a name="ResetIpSubnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetIpSubnetworks"></a>

```go
func ResetIpSubnetworks()
```

##### `ResetMembers` <a name="ResetMembers" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetMembers"></a>

```go
func ResetMembers()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetNegate"></a>

```go
func ResetNegate()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetRegions"></a>

```go
func ResetRegions()
```

##### `ResetRequiredAccessLevels` <a name="ResetRequiredAccessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetRequiredAccessLevels"></a>

```go
func ResetRequiredAccessLevels()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanageraccesslevelcondition"

accesscontextmanageraccesslevelcondition.AccessContextManagerAccessLevelCondition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanageraccesslevelcondition"

accesscontextmanageraccesslevelcondition.AccessContextManagerAccessLevelCondition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanageraccesslevelcondition"

accesscontextmanageraccesslevelcondition.AccessContextManagerAccessLevelCondition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.devicePolicy">DevicePolicy</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference">AccessContextManagerAccessLevelConditionDevicePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference">AccessContextManagerAccessLevelConditionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.devicePolicyInput">DevicePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy">AccessContextManagerAccessLevelConditionDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.ipSubnetworksInput">IpSubnetworksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.negateInput">NegateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.regionsInput">RegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.requiredAccessLevelsInput">RequiredAccessLevelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.ipSubnetworks">IpSubnetworks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.negate">Negate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.requiredAccessLevels">RequiredAccessLevels</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DevicePolicy`<sup>Required</sup> <a name="DevicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.devicePolicy"></a>

```go
func DevicePolicy() AccessContextManagerAccessLevelConditionDevicePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference">AccessContextManagerAccessLevelConditionDevicePolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.timeouts"></a>

```go
func Timeouts() AccessContextManagerAccessLevelConditionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference">AccessContextManagerAccessLevelConditionTimeoutsOutputReference</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `DevicePolicyInput`<sup>Optional</sup> <a name="DevicePolicyInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.devicePolicyInput"></a>

```go
func DevicePolicyInput() AccessContextManagerAccessLevelConditionDevicePolicy
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy">AccessContextManagerAccessLevelConditionDevicePolicy</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpSubnetworksInput`<sup>Optional</sup> <a name="IpSubnetworksInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.ipSubnetworksInput"></a>

```go
func IpSubnetworksInput() *[]*string
```

- *Type:* *[]*string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.negateInput"></a>

```go
func NegateInput() interface{}
```

- *Type:* interface{}

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.regionsInput"></a>

```go
func RegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RequiredAccessLevelsInput`<sup>Optional</sup> <a name="RequiredAccessLevelsInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.requiredAccessLevelsInput"></a>

```go
func RequiredAccessLevelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpSubnetworks`<sup>Required</sup> <a name="IpSubnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.ipSubnetworks"></a>

```go
func IpSubnetworks() *[]*string
```

- *Type:* *[]*string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.negate"></a>

```go
func Negate() interface{}
```

- *Type:* interface{}

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `RequiredAccessLevels`<sup>Required</sup> <a name="RequiredAccessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.requiredAccessLevels"></a>

```go
func RequiredAccessLevels() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerAccessLevelConditionConfig <a name="AccessContextManagerAccessLevelConditionConfig" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanageraccesslevelcondition"

&accesscontextmanageraccesslevelcondition.AccessContextManagerAccessLevelConditionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccessLevel: *string,
	DevicePolicy: github.com/cdktf/cdktf-provider-google-go/google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy,
	Id: *string,
	IpSubnetworks: *[]*string,
	Members: *[]*string,
	Negate: interface{},
	Regions: *[]*string,
	RequiredAccessLevels: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | The name of the Access Level to add this condition to. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.devicePolicy">DevicePolicy</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy">AccessContextManagerAccessLevelConditionDevicePolicy</a></code> | device_policy block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_level_condition#id AccessContextManagerAccessLevelCondition#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.ipSubnetworks">IpSubnetworks</a></code> | <code>*[]*string</code> | A list of CIDR block IP subnetwork specification. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.members">Members</a></code> | <code>*[]*string</code> | An allowed list of members (users, service accounts). Using groups is not supported yet. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.negate">Negate</a></code> | <code>interface{}</code> | Whether to negate the Condition. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.regions">Regions</a></code> | <code>*[]*string</code> | The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.requiredAccessLevels">RequiredAccessLevels</a></code> | <code>*[]*string</code> | A list of other access levels defined in the same Policy, referenced by resource name. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts">AccessContextManagerAccessLevelConditionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

The name of the Access Level to add this condition to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_level_condition#access_level AccessContextManagerAccessLevelCondition#access_level}

---

##### `DevicePolicy`<sup>Optional</sup> <a name="DevicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.devicePolicy"></a>

```go
DevicePolicy AccessContextManagerAccessLevelConditionDevicePolicy
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy">AccessContextManagerAccessLevelConditionDevicePolicy</a>

device_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_level_condition#device_policy AccessContextManagerAccessLevelCondition#device_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_level_condition#id AccessContextManagerAccessLevelCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpSubnetworks`<sup>Optional</sup> <a name="IpSubnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.ipSubnetworks"></a>

```go
IpSubnetworks *[]*string
```

- *Type:* *[]*string

A list of CIDR block IP subnetwork specification.

May be IPv4
or IPv6.
Note that for a CIDR IP address block, the specified IP address
portion must be properly truncated (i.e. all the host bits must
be zero) or the input is considered malformed. For example,
"192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly,
for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32"
is not. The originating IP of a request must be in one of the
listed subnets in order for this Condition to be true.
If empty, all IP addresses are allowed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_level_condition#ip_subnetworks AccessContextManagerAccessLevelCondition#ip_subnetworks}

---

##### `Members`<sup>Optional</sup> <a name="Members" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

An allowed list of members (users, service accounts). Using groups is not supported yet.

The signed-in user originating the request must be a part of one
of the provided members. If not specified, a request may come
from any user (logged in/not logged in, not present in any
groups, etc.).
Formats: 'user:{emailid}', 'serviceAccount:{emailid}'

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_level_condition#members AccessContextManagerAccessLevelCondition#members}

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.negate"></a>

```go
Negate interface{}
```

- *Type:* interface{}

Whether to negate the Condition.

If true, the Condition becomes
a NAND over its non-empty fields, each field must be false for
the Condition overall to be satisfied. Defaults to false.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_level_condition#negate AccessContextManagerAccessLevelCondition#negate}

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.regions"></a>

```go
Regions *[]*string
```

- *Type:* *[]*string

The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_level_condition#regions AccessContextManagerAccessLevelCondition#regions}

---

##### `RequiredAccessLevels`<sup>Optional</sup> <a name="RequiredAccessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.requiredAccessLevels"></a>

```go
RequiredAccessLevels *[]*string
```

- *Type:* *[]*string

A list of other access levels defined in the same Policy, referenced by resource name.

Referencing an AccessLevel which
does not exist is an error. All access levels listed must be
granted for the Condition to be true.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_level_condition#required_access_levels AccessContextManagerAccessLevelCondition#required_access_levels}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.timeouts"></a>

```go
Timeouts AccessContextManagerAccessLevelConditionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts">AccessContextManagerAccessLevelConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_level_condition#timeouts AccessContextManagerAccessLevelCondition#timeouts}

---

### AccessContextManagerAccessLevelConditionDevicePolicy <a name="AccessContextManagerAccessLevelConditionDevicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanageraccesslevelcondition"

&accesscontextmanageraccesslevelcondition.AccessContextManagerAccessLevelConditionDevicePolicy {
	AllowedDeviceManagementLevels: *[]*string,
	AllowedEncryptionStatuses: *[]*string,
	OsConstraints: interface{},
	RequireAdminApproval: interface{},
	RequireCorpOwned: interface{},
	RequireScreenLock: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.allowedDeviceManagementLevels">AllowedDeviceManagementLevels</a></code> | <code>*[]*string</code> | A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"]. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.allowedEncryptionStatuses">AllowedEncryptionStatuses</a></code> | <code>*[]*string</code> | A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"]. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.osConstraints">OsConstraints</a></code> | <code>interface{}</code> | os_constraints block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.requireAdminApproval">RequireAdminApproval</a></code> | <code>interface{}</code> | Whether the device needs to be approved by the customer admin. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.requireCorpOwned">RequireCorpOwned</a></code> | <code>interface{}</code> | Whether the device needs to be corp owned. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.requireScreenLock">RequireScreenLock</a></code> | <code>interface{}</code> | Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false. |

---

##### `AllowedDeviceManagementLevels`<sup>Optional</sup> <a name="AllowedDeviceManagementLevels" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.allowedDeviceManagementLevels"></a>

```go
AllowedDeviceManagementLevels *[]*string
```

- *Type:* *[]*string

A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_level_condition#allowed_device_management_levels AccessContextManagerAccessLevelCondition#allowed_device_management_levels}

---

##### `AllowedEncryptionStatuses`<sup>Optional</sup> <a name="AllowedEncryptionStatuses" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.allowedEncryptionStatuses"></a>

```go
AllowedEncryptionStatuses *[]*string
```

- *Type:* *[]*string

A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_level_condition#allowed_encryption_statuses AccessContextManagerAccessLevelCondition#allowed_encryption_statuses}

---

##### `OsConstraints`<sup>Optional</sup> <a name="OsConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.osConstraints"></a>

```go
OsConstraints interface{}
```

- *Type:* interface{}

os_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_level_condition#os_constraints AccessContextManagerAccessLevelCondition#os_constraints}

---

##### `RequireAdminApproval`<sup>Optional</sup> <a name="RequireAdminApproval" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.requireAdminApproval"></a>

```go
RequireAdminApproval interface{}
```

- *Type:* interface{}

Whether the device needs to be approved by the customer admin.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_level_condition#require_admin_approval AccessContextManagerAccessLevelCondition#require_admin_approval}

---

##### `RequireCorpOwned`<sup>Optional</sup> <a name="RequireCorpOwned" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.requireCorpOwned"></a>

```go
RequireCorpOwned interface{}
```

- *Type:* interface{}

Whether the device needs to be corp owned.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_level_condition#require_corp_owned AccessContextManagerAccessLevelCondition#require_corp_owned}

---

##### `RequireScreenLock`<sup>Optional</sup> <a name="RequireScreenLock" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.requireScreenLock"></a>

```go
RequireScreenLock interface{}
```

- *Type:* interface{}

Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_level_condition#require_screen_lock AccessContextManagerAccessLevelCondition#require_screen_lock}

---

### AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints <a name="AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanageraccesslevelcondition"

&accesscontextmanageraccesslevelcondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints {
	OsType: *string,
	MinimumVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.property.osType">OsType</a></code> | <code>*string</code> | The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"]. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.property.minimumVersion">MinimumVersion</a></code> | <code>*string</code> | The minimum allowed OS version. |

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.property.osType"></a>

```go
OsType *string
```

- *Type:* *string

The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_level_condition#os_type AccessContextManagerAccessLevelCondition#os_type}

---

##### `MinimumVersion`<sup>Optional</sup> <a name="MinimumVersion" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.property.minimumVersion"></a>

```go
MinimumVersion *string
```

- *Type:* *string

The minimum allowed OS version.

If not set, any version
of this OS satisfies the constraint.
Format: "major.minor.patch" such as "10.5.301", "9.2.1".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_level_condition#minimum_version AccessContextManagerAccessLevelCondition#minimum_version}

---

### AccessContextManagerAccessLevelConditionTimeouts <a name="AccessContextManagerAccessLevelConditionTimeouts" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanageraccesslevelcondition"

&accesscontextmanageraccesslevelcondition.AccessContextManagerAccessLevelConditionTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_level_condition#create AccessContextManagerAccessLevelCondition#create}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_level_condition#delete AccessContextManagerAccessLevelCondition#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_level_condition#create AccessContextManagerAccessLevelCondition#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_level_condition#delete AccessContextManagerAccessLevelCondition#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList <a name="AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanageraccesslevelcondition"

accesscontextmanageraccesslevelcondition.NewAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.get"></a>

```go
func Get(index *f64) AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference <a name="AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanageraccesslevelcondition"

accesscontextmanageraccesslevelcondition.NewAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.resetMinimumVersion">ResetMinimumVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinimumVersion` <a name="ResetMinimumVersion" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.resetMinimumVersion"></a>

```go
func ResetMinimumVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput">MinimumVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.osTypeInput">OsTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.minimumVersion">MinimumVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.osType">OsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MinimumVersionInput`<sup>Optional</sup> <a name="MinimumVersionInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput"></a>

```go
func MinimumVersionInput() *string
```

- *Type:* *string

---

##### `OsTypeInput`<sup>Optional</sup> <a name="OsTypeInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.osTypeInput"></a>

```go
func OsTypeInput() *string
```

- *Type:* *string

---

##### `MinimumVersion`<sup>Required</sup> <a name="MinimumVersion" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.minimumVersion"></a>

```go
func MinimumVersion() *string
```

- *Type:* *string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.osType"></a>

```go
func OsType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessContextManagerAccessLevelConditionDevicePolicyOutputReference <a name="AccessContextManagerAccessLevelConditionDevicePolicyOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanageraccesslevelcondition"

accesscontextmanageraccesslevelcondition.NewAccessContextManagerAccessLevelConditionDevicePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessContextManagerAccessLevelConditionDevicePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.putOsConstraints">PutOsConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetAllowedDeviceManagementLevels">ResetAllowedDeviceManagementLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetAllowedEncryptionStatuses">ResetAllowedEncryptionStatuses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetOsConstraints">ResetOsConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireAdminApproval">ResetRequireAdminApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireCorpOwned">ResetRequireCorpOwned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireScreenLock">ResetRequireScreenLock</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOsConstraints` <a name="PutOsConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.putOsConstraints"></a>

```go
func PutOsConstraints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.putOsConstraints.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowedDeviceManagementLevels` <a name="ResetAllowedDeviceManagementLevels" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetAllowedDeviceManagementLevels"></a>

```go
func ResetAllowedDeviceManagementLevels()
```

##### `ResetAllowedEncryptionStatuses` <a name="ResetAllowedEncryptionStatuses" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetAllowedEncryptionStatuses"></a>

```go
func ResetAllowedEncryptionStatuses()
```

##### `ResetOsConstraints` <a name="ResetOsConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetOsConstraints"></a>

```go
func ResetOsConstraints()
```

##### `ResetRequireAdminApproval` <a name="ResetRequireAdminApproval" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireAdminApproval"></a>

```go
func ResetRequireAdminApproval()
```

##### `ResetRequireCorpOwned` <a name="ResetRequireCorpOwned" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireCorpOwned"></a>

```go
func ResetRequireCorpOwned()
```

##### `ResetRequireScreenLock` <a name="ResetRequireScreenLock" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireScreenLock"></a>

```go
func ResetRequireScreenLock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.osConstraints">OsConstraints</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList">AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput">AllowedDeviceManagementLevelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedEncryptionStatusesInput">AllowedEncryptionStatusesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.osConstraintsInput">OsConstraintsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireAdminApprovalInput">RequireAdminApprovalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireCorpOwnedInput">RequireCorpOwnedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireScreenLockInput">RequireScreenLockInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedDeviceManagementLevels">AllowedDeviceManagementLevels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedEncryptionStatuses">AllowedEncryptionStatuses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireAdminApproval">RequireAdminApproval</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireCorpOwned">RequireCorpOwned</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireScreenLock">RequireScreenLock</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy">AccessContextManagerAccessLevelConditionDevicePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OsConstraints`<sup>Required</sup> <a name="OsConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.osConstraints"></a>

```go
func OsConstraints() AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList">AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList</a>

---

##### `AllowedDeviceManagementLevelsInput`<sup>Optional</sup> <a name="AllowedDeviceManagementLevelsInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput"></a>

```go
func AllowedDeviceManagementLevelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedEncryptionStatusesInput`<sup>Optional</sup> <a name="AllowedEncryptionStatusesInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedEncryptionStatusesInput"></a>

```go
func AllowedEncryptionStatusesInput() *[]*string
```

- *Type:* *[]*string

---

##### `OsConstraintsInput`<sup>Optional</sup> <a name="OsConstraintsInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.osConstraintsInput"></a>

```go
func OsConstraintsInput() interface{}
```

- *Type:* interface{}

---

##### `RequireAdminApprovalInput`<sup>Optional</sup> <a name="RequireAdminApprovalInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireAdminApprovalInput"></a>

```go
func RequireAdminApprovalInput() interface{}
```

- *Type:* interface{}

---

##### `RequireCorpOwnedInput`<sup>Optional</sup> <a name="RequireCorpOwnedInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireCorpOwnedInput"></a>

```go
func RequireCorpOwnedInput() interface{}
```

- *Type:* interface{}

---

##### `RequireScreenLockInput`<sup>Optional</sup> <a name="RequireScreenLockInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireScreenLockInput"></a>

```go
func RequireScreenLockInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedDeviceManagementLevels`<sup>Required</sup> <a name="AllowedDeviceManagementLevels" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedDeviceManagementLevels"></a>

```go
func AllowedDeviceManagementLevels() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedEncryptionStatuses`<sup>Required</sup> <a name="AllowedEncryptionStatuses" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedEncryptionStatuses"></a>

```go
func AllowedEncryptionStatuses() *[]*string
```

- *Type:* *[]*string

---

##### `RequireAdminApproval`<sup>Required</sup> <a name="RequireAdminApproval" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireAdminApproval"></a>

```go
func RequireAdminApproval() interface{}
```

- *Type:* interface{}

---

##### `RequireCorpOwned`<sup>Required</sup> <a name="RequireCorpOwned" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireCorpOwned"></a>

```go
func RequireCorpOwned() interface{}
```

- *Type:* interface{}

---

##### `RequireScreenLock`<sup>Required</sup> <a name="RequireScreenLock" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireScreenLock"></a>

```go
func RequireScreenLock() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() AccessContextManagerAccessLevelConditionDevicePolicy
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy">AccessContextManagerAccessLevelConditionDevicePolicy</a>

---


### AccessContextManagerAccessLevelConditionTimeoutsOutputReference <a name="AccessContextManagerAccessLevelConditionTimeoutsOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanageraccesslevelcondition"

accesscontextmanageraccesslevelcondition.NewAccessContextManagerAccessLevelConditionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessContextManagerAccessLevelConditionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



