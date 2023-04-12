# `computeFirewall` Submodule <a name="`computeFirewall` Submodule" id="@cdktf/provider-google.computeFirewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeFirewall <a name="ComputeFirewall" id="@cdktf/provider-google.computeFirewall.ComputeFirewall"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_firewall google_compute_firewall}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computefirewall"

computefirewall.NewComputeFirewall(scope Construct, id *string, config ComputeFirewallConfig) ComputeFirewall
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig">ComputeFirewallConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig">ComputeFirewallConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.putAllow">PutAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.putDeny">PutDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetAllow">ResetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDeny">ResetDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDestinationRanges">ResetDestinationRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetEnableLogging">ResetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetSourceRanges">ResetSourceRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetSourceServiceAccounts">ResetSourceServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetSourceTags">ResetSourceTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetTargetServiceAccounts">ResetTargetServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetTargetTags">ResetTargetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAllow` <a name="PutAllow" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.putAllow"></a>

```go
func PutAllow(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.putAllow.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDeny` <a name="PutDeny" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.putDeny"></a>

```go
func PutDeny(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.putDeny.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.putLogConfig"></a>

```go
func PutLogConfig(value ComputeFirewallLogConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.putTimeouts"></a>

```go
func PutTimeouts(value ComputeFirewallTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a>

---

##### `ResetAllow` <a name="ResetAllow" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetAllow"></a>

```go
func ResetAllow()
```

##### `ResetDeny` <a name="ResetDeny" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDeny"></a>

```go
func ResetDeny()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDestinationRanges` <a name="ResetDestinationRanges" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDestinationRanges"></a>

```go
func ResetDestinationRanges()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetEnableLogging` <a name="ResetEnableLogging" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetEnableLogging"></a>

```go
func ResetEnableLogging()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetId"></a>

```go
func ResetId()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetLogConfig"></a>

```go
func ResetLogConfig()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSourceRanges` <a name="ResetSourceRanges" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetSourceRanges"></a>

```go
func ResetSourceRanges()
```

##### `ResetSourceServiceAccounts` <a name="ResetSourceServiceAccounts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetSourceServiceAccounts"></a>

```go
func ResetSourceServiceAccounts()
```

##### `ResetSourceTags` <a name="ResetSourceTags" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetSourceTags"></a>

```go
func ResetSourceTags()
```

##### `ResetTargetServiceAccounts` <a name="ResetTargetServiceAccounts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetTargetServiceAccounts"></a>

```go
func ResetTargetServiceAccounts()
```

##### `ResetTargetTags` <a name="ResetTargetTags" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetTargetTags"></a>

```go
func ResetTargetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computefirewall"

computefirewall.ComputeFirewall_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computefirewall"

computefirewall.ComputeFirewall_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computefirewall"

computefirewall.ComputeFirewall_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList">ComputeFirewallAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.deny">Deny</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList">ComputeFirewallDenyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference">ComputeFirewallLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference">ComputeFirewallTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.allowInput">AllowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.denyInput">DenyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.destinationRangesInput">DestinationRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.enableLoggingInput">EnableLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.logConfigInput">LogConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceRangesInput">SourceRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceServiceAccountsInput">SourceServiceAccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceTagsInput">SourceTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.targetServiceAccountsInput">TargetServiceAccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.targetTagsInput">TargetTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.destinationRanges">DestinationRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.enableLogging">EnableLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceRanges">SourceRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceServiceAccounts">SourceServiceAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceTags">SourceTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.targetServiceAccounts">TargetServiceAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.targetTags">TargetTags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Allow`<sup>Required</sup> <a name="Allow" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.allow"></a>

```go
func Allow() ComputeFirewallAllowList
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList">ComputeFirewallAllowList</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `Deny`<sup>Required</sup> <a name="Deny" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.deny"></a>

```go
func Deny() ComputeFirewallDenyList
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList">ComputeFirewallDenyList</a>

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.logConfig"></a>

```go
func LogConfig() ComputeFirewallLogConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference">ComputeFirewallLogConfigOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.timeouts"></a>

```go
func Timeouts() ComputeFirewallTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference">ComputeFirewallTimeoutsOutputReference</a>

---

##### `AllowInput`<sup>Optional</sup> <a name="AllowInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.allowInput"></a>

```go
func AllowInput() interface{}
```

- *Type:* interface{}

---

##### `DenyInput`<sup>Optional</sup> <a name="DenyInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.denyInput"></a>

```go
func DenyInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DestinationRangesInput`<sup>Optional</sup> <a name="DestinationRangesInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.destinationRangesInput"></a>

```go
func DestinationRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnableLoggingInput`<sup>Optional</sup> <a name="EnableLoggingInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.enableLoggingInput"></a>

```go
func EnableLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.logConfigInput"></a>

```go
func LogConfigInput() ComputeFirewallLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SourceRangesInput`<sup>Optional</sup> <a name="SourceRangesInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceRangesInput"></a>

```go
func SourceRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceServiceAccountsInput`<sup>Optional</sup> <a name="SourceServiceAccountsInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceServiceAccountsInput"></a>

```go
func SourceServiceAccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceTagsInput`<sup>Optional</sup> <a name="SourceTagsInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceTagsInput"></a>

```go
func SourceTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetServiceAccountsInput`<sup>Optional</sup> <a name="TargetServiceAccountsInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.targetServiceAccountsInput"></a>

```go
func TargetServiceAccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetTagsInput`<sup>Optional</sup> <a name="TargetTagsInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.targetTagsInput"></a>

```go
func TargetTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DestinationRanges`<sup>Required</sup> <a name="DestinationRanges" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.destinationRanges"></a>

```go
func DestinationRanges() *[]*string
```

- *Type:* *[]*string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.enableLogging"></a>

```go
func EnableLogging() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SourceRanges`<sup>Required</sup> <a name="SourceRanges" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceRanges"></a>

```go
func SourceRanges() *[]*string
```

- *Type:* *[]*string

---

##### `SourceServiceAccounts`<sup>Required</sup> <a name="SourceServiceAccounts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceServiceAccounts"></a>

```go
func SourceServiceAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `SourceTags`<sup>Required</sup> <a name="SourceTags" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceTags"></a>

```go
func SourceTags() *[]*string
```

- *Type:* *[]*string

---

##### `TargetServiceAccounts`<sup>Required</sup> <a name="TargetServiceAccounts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.targetServiceAccounts"></a>

```go
func TargetServiceAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `TargetTags`<sup>Required</sup> <a name="TargetTags" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.targetTags"></a>

```go
func TargetTags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeFirewallAllow <a name="ComputeFirewallAllow" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computefirewall"

&computefirewall.ComputeFirewallAllow {
	Protocol: *string,
	Ports: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow.property.protocol">Protocol</a></code> | <code>*string</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow.property.ports">Ports</a></code> | <code>*[]*string</code> | An optional list of ports to which this rule applies. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllow.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The IP protocol to which this rule applies.

The protocol type is
required when creating a firewall rule. This value can either be
one of the following well known protocol strings (tcp, udp,
icmp, esp, ah, sctp, ipip, all), or the IP protocol number.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#protocol ComputeFirewall#protocol}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllow.property.ports"></a>

```go
Ports *[]*string
```

- *Type:* *[]*string

An optional list of ports to which this rule applies.

This field
is only applicable for UDP or TCP protocol. Each entry must be
either an integer or a range. If not specified, this rule
applies to connections through any port.

Example inputs include: ["22"], ["80","443"], and
["12345-12349"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#ports ComputeFirewall#ports}

---

### ComputeFirewallConfig <a name="ComputeFirewallConfig" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computefirewall"

&computefirewall.ComputeFirewallConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Network: *string,
	Allow: interface{},
	Deny: interface{},
	Description: *string,
	DestinationRanges: *[]*string,
	Direction: *string,
	Disabled: interface{},
	EnableLogging: interface{},
	Id: *string,
	LogConfig: github.com/cdktf/cdktf-provider-google-go/google.computeFirewall.ComputeFirewallLogConfig,
	Priority: *f64,
	Project: *string,
	SourceRanges: *[]*string,
	SourceServiceAccounts: *[]*string,
	SourceTags: *[]*string,
	TargetServiceAccounts: *[]*string,
	TargetTags: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeFirewall.ComputeFirewallTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.network">Network</a></code> | <code>*string</code> | The name or self_link of the network to attach this firewall to. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.allow">Allow</a></code> | <code>interface{}</code> | allow block. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.deny">Deny</a></code> | <code>interface{}</code> | deny block. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.destinationRanges">DestinationRanges</a></code> | <code>*[]*string</code> | If destination ranges are specified, the firewall will apply only to traffic that has destination IP address in these ranges. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.direction">Direction</a></code> | <code>*string</code> | Direction of traffic to which this firewall applies; |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Denotes whether the firewall rule is disabled, i.e not applied to the network it is associated with. When set to true, the firewall rule is not enforced and the network behaves as if it did not exist. If this is unspecified, the firewall rule will be enabled. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.enableLogging">EnableLogging</a></code> | <code>interface{}</code> | This field denotes whether to enable logging for a particular firewall rule. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#id ComputeFirewall#id}. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.priority">Priority</a></code> | <code>*f64</code> | Priority for this rule. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#project ComputeFirewall#project}. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.sourceRanges">SourceRanges</a></code> | <code>*[]*string</code> | If source ranges are specified, the firewall will apply only to traffic that has source IP address in these ranges. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.sourceServiceAccounts">SourceServiceAccounts</a></code> | <code>*[]*string</code> | If source service accounts are specified, the firewall will apply only to traffic originating from an instance with a service account in this list. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.sourceTags">SourceTags</a></code> | <code>*[]*string</code> | If source tags are specified, the firewall will apply only to traffic with source IP that belongs to a tag listed in source tags. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.targetServiceAccounts">TargetServiceAccounts</a></code> | <code>*[]*string</code> | A list of service accounts indicating sets of instances located in the network that may make network connections as specified in allowed[]. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.targetTags">TargetTags</a></code> | <code>*[]*string</code> | A list of instance tags indicating sets of instances located in the network that may make network connections as specified in allowed[]. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#name ComputeFirewall#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The name or self_link of the network to attach this firewall to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#network ComputeFirewall#network}

---

##### `Allow`<sup>Optional</sup> <a name="Allow" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.allow"></a>

```go
Allow interface{}
```

- *Type:* interface{}

allow block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#allow ComputeFirewall#allow}

---

##### `Deny`<sup>Optional</sup> <a name="Deny" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.deny"></a>

```go
Deny interface{}
```

- *Type:* interface{}

deny block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#deny ComputeFirewall#deny}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#description ComputeFirewall#description}

---

##### `DestinationRanges`<sup>Optional</sup> <a name="DestinationRanges" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.destinationRanges"></a>

```go
DestinationRanges *[]*string
```

- *Type:* *[]*string

If destination ranges are specified, the firewall will apply only to traffic that has destination IP address in these ranges.

These ranges
must be expressed in CIDR format. IPv4 or IPv6 ranges are supported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#destination_ranges ComputeFirewall#destination_ranges}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Direction of traffic to which this firewall applies;

default is
INGRESS. Note: For INGRESS traffic, it is NOT supported to specify
destinationRanges; For EGRESS traffic, it is NOT supported to specify
'source_ranges' OR 'source_tags'. For INGRESS traffic, one of 'source_ranges',
'source_tags' or 'source_service_accounts' is required. Possible values: ["INGRESS", "EGRESS"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#direction ComputeFirewall#direction}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Denotes whether the firewall rule is disabled, i.e not applied to the network it is associated with. When set to true, the firewall rule is not enforced and the network behaves as if it did not exist. If this is unspecified, the firewall rule will be enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#disabled ComputeFirewall#disabled}

---

##### `EnableLogging`<sup>Optional</sup> <a name="EnableLogging" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.enableLogging"></a>

```go
EnableLogging interface{}
```

- *Type:* interface{}

This field denotes whether to enable logging for a particular firewall rule.

If logging is enabled, logs will be exported to Stackdriver.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#enable_logging ComputeFirewall#enable_logging}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#id ComputeFirewall#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.logConfig"></a>

```go
LogConfig ComputeFirewallLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#log_config ComputeFirewall#log_config}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Priority for this rule.

This is an integer between 0 and 65535, both
inclusive. When not specified, the value assumed is 1000. Relative
priorities determine precedence of conflicting rules. Lower value of
priority implies higher precedence (eg, a rule with priority 0 has
higher precedence than a rule with priority 1). DENY rules take
precedence over ALLOW rules having equal priority.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#priority ComputeFirewall#priority}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#project ComputeFirewall#project}.

---

##### `SourceRanges`<sup>Optional</sup> <a name="SourceRanges" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.sourceRanges"></a>

```go
SourceRanges *[]*string
```

- *Type:* *[]*string

If source ranges are specified, the firewall will apply only to traffic that has source IP address in these ranges.

These ranges must
be expressed in CIDR format. One or both of sourceRanges and
sourceTags may be set. If both properties are set, the firewall will
apply to traffic that has source IP address within sourceRanges OR the
source IP that belongs to a tag listed in the sourceTags property. The
connection does not need to match both properties for the firewall to
apply. IPv4 or IPv6 ranges are supported. For INGRESS traffic, one of
'source_ranges', 'source_tags' or 'source_service_accounts' is required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#source_ranges ComputeFirewall#source_ranges}

---

##### `SourceServiceAccounts`<sup>Optional</sup> <a name="SourceServiceAccounts" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.sourceServiceAccounts"></a>

```go
SourceServiceAccounts *[]*string
```

- *Type:* *[]*string

If source service accounts are specified, the firewall will apply only to traffic originating from an instance with a service account in this list.

Source service accounts cannot be used to control traffic to an
instance's external IP address because service accounts are associated
with an instance, not an IP address. sourceRanges can be set at the
same time as sourceServiceAccounts. If both are set, the firewall will
apply to traffic that has source IP address within sourceRanges OR the
source IP belongs to an instance with service account listed in
sourceServiceAccount. The connection does not need to match both
properties for the firewall to apply. sourceServiceAccounts cannot be
used at the same time as sourceTags or targetTags. For INGRESS traffic,
one of 'source_ranges', 'source_tags' or 'source_service_accounts' is required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#source_service_accounts ComputeFirewall#source_service_accounts}

---

##### `SourceTags`<sup>Optional</sup> <a name="SourceTags" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.sourceTags"></a>

```go
SourceTags *[]*string
```

- *Type:* *[]*string

If source tags are specified, the firewall will apply only to traffic with source IP that belongs to a tag listed in source tags.

Source
tags cannot be used to control traffic to an instance's external IP
address. Because tags are associated with an instance, not an IP
address. One or both of sourceRanges and sourceTags may be set. If
both properties are set, the firewall will apply to traffic that has
source IP address within sourceRanges OR the source IP that belongs to
a tag listed in the sourceTags property. The connection does not need
to match both properties for the firewall to apply. For INGRESS traffic,
one of 'source_ranges', 'source_tags' or 'source_service_accounts' is required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#source_tags ComputeFirewall#source_tags}

---

##### `TargetServiceAccounts`<sup>Optional</sup> <a name="TargetServiceAccounts" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.targetServiceAccounts"></a>

```go
TargetServiceAccounts *[]*string
```

- *Type:* *[]*string

A list of service accounts indicating sets of instances located in the network that may make network connections as specified in allowed[].

targetServiceAccounts cannot be used at the same time as targetTags or
sourceTags. If neither targetServiceAccounts nor targetTags are
specified, the firewall rule applies to all instances on the specified
network.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#target_service_accounts ComputeFirewall#target_service_accounts}

---

##### `TargetTags`<sup>Optional</sup> <a name="TargetTags" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.targetTags"></a>

```go
TargetTags *[]*string
```

- *Type:* *[]*string

A list of instance tags indicating sets of instances located in the network that may make network connections as specified in allowed[].

If no targetTags are specified, the firewall rule applies to all
instances on the specified network.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#target_tags ComputeFirewall#target_tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.timeouts"></a>

```go
Timeouts ComputeFirewallTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#timeouts ComputeFirewall#timeouts}

---

### ComputeFirewallDeny <a name="ComputeFirewallDeny" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDeny.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computefirewall"

&computefirewall.ComputeFirewallDeny {
	Protocol: *string,
	Ports: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny.property.protocol">Protocol</a></code> | <code>*string</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny.property.ports">Ports</a></code> | <code>*[]*string</code> | An optional list of ports to which this rule applies. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDeny.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The IP protocol to which this rule applies.

The protocol type is
required when creating a firewall rule. This value can either be
one of the following well known protocol strings (tcp, udp,
icmp, esp, ah, sctp, ipip, all), or the IP protocol number.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#protocol ComputeFirewall#protocol}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDeny.property.ports"></a>

```go
Ports *[]*string
```

- *Type:* *[]*string

An optional list of ports to which this rule applies.

This field
is only applicable for UDP or TCP protocol. Each entry must be
either an integer or a range. If not specified, this rule
applies to connections through any port.

Example inputs include: ["22"], ["80","443"], and
["12345-12349"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#ports ComputeFirewall#ports}

---

### ComputeFirewallLogConfig <a name="ComputeFirewallLogConfig" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computefirewall"

&computefirewall.ComputeFirewallLogConfig {
	Metadata: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig.property.metadata">Metadata</a></code> | <code>*string</code> | This field denotes whether to include or exclude metadata for firewall logs. Possible values: ["EXCLUDE_ALL_METADATA", "INCLUDE_ALL_METADATA"]. |

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig.property.metadata"></a>

```go
Metadata *string
```

- *Type:* *string

This field denotes whether to include or exclude metadata for firewall logs. Possible values: ["EXCLUDE_ALL_METADATA", "INCLUDE_ALL_METADATA"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#metadata ComputeFirewall#metadata}

---

### ComputeFirewallTimeouts <a name="ComputeFirewallTimeouts" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computefirewall"

&computefirewall.ComputeFirewallTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#create ComputeFirewall#create}. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#delete ComputeFirewall#delete}. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#update ComputeFirewall#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#create ComputeFirewall#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#delete ComputeFirewall#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_firewall#update ComputeFirewall#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeFirewallAllowList <a name="ComputeFirewallAllowList" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computefirewall"

computefirewall.NewComputeFirewallAllowList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeFirewallAllowList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.get"></a>

```go
func Get(index *f64) ComputeFirewallAllowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeFirewallAllowOutputReference <a name="ComputeFirewallAllowOutputReference" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computefirewall"

computefirewall.NewComputeFirewallAllowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeFirewallAllowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.resetPorts"></a>

```go
func ResetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.portsInput">PortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.ports">Ports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.portsInput"></a>

```go
func PortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.ports"></a>

```go
func Ports() *[]*string
```

- *Type:* *[]*string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeFirewallDenyList <a name="ComputeFirewallDenyList" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computefirewall"

computefirewall.NewComputeFirewallDenyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeFirewallDenyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.get"></a>

```go
func Get(index *f64) ComputeFirewallDenyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeFirewallDenyOutputReference <a name="ComputeFirewallDenyOutputReference" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computefirewall"

computefirewall.NewComputeFirewallDenyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeFirewallDenyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.resetPorts"></a>

```go
func ResetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.portsInput">PortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.ports">Ports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.portsInput"></a>

```go
func PortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.ports"></a>

```go
func Ports() *[]*string
```

- *Type:* *[]*string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeFirewallLogConfigOutputReference <a name="ComputeFirewallLogConfigOutputReference" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computefirewall"

computefirewall.NewComputeFirewallLogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeFirewallLogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.metadataInput">MetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.metadataInput"></a>

```go
func MetadataInput() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeFirewallLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a>

---


### ComputeFirewallTimeoutsOutputReference <a name="ComputeFirewallTimeoutsOutputReference" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computefirewall"

computefirewall.NewComputeFirewallTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeFirewallTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



