# `computeForwardingRule` Submodule <a name="`computeForwardingRule` Submodule" id="@cdktf/provider-google.computeForwardingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeForwardingRule <a name="ComputeForwardingRule" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule google_compute_forwarding_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeforwardingrule"

computeforwardingrule.NewComputeForwardingRule(scope Construct, id *string, config ComputeForwardingRuleConfig) ComputeForwardingRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig">ComputeForwardingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig">ComputeForwardingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.putServiceDirectoryRegistrations">PutServiceDirectoryRegistrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetAllowGlobalAccess">ResetAllowGlobalAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetAllowPscGlobalAccess">ResetAllowPscGlobalAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetAllPorts">ResetAllPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetBackendService">ResetBackendService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetIpCollection">ResetIpCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetIpProtocol">ResetIpProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetIpVersion">ResetIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetIsMirroringCollector">ResetIsMirroringCollector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetLoadBalancingScheme">ResetLoadBalancingScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetNetworkTier">ResetNetworkTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetNoAutomateDnsZone">ResetNoAutomateDnsZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetPortRange">ResetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetPorts">ResetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetRecreateClosedPsc">ResetRecreateClosedPsc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetServiceDirectoryRegistrations">ResetServiceDirectoryRegistrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetServiceLabel">ResetServiceLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetSourceIpRanges">ResetSourceIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutServiceDirectoryRegistrations` <a name="PutServiceDirectoryRegistrations" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.putServiceDirectoryRegistrations"></a>

```go
func PutServiceDirectoryRegistrations(value ComputeForwardingRuleServiceDirectoryRegistrations)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.putServiceDirectoryRegistrations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations">ComputeForwardingRuleServiceDirectoryRegistrations</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.putTimeouts"></a>

```go
func PutTimeouts(value ComputeForwardingRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts">ComputeForwardingRuleTimeouts</a>

---

##### `ResetAllowGlobalAccess` <a name="ResetAllowGlobalAccess" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetAllowGlobalAccess"></a>

```go
func ResetAllowGlobalAccess()
```

##### `ResetAllowPscGlobalAccess` <a name="ResetAllowPscGlobalAccess" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetAllowPscGlobalAccess"></a>

```go
func ResetAllowPscGlobalAccess()
```

##### `ResetAllPorts` <a name="ResetAllPorts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetAllPorts"></a>

```go
func ResetAllPorts()
```

##### `ResetBackendService` <a name="ResetBackendService" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetBackendService"></a>

```go
func ResetBackendService()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetId"></a>

```go
func ResetId()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetIpCollection` <a name="ResetIpCollection" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetIpCollection"></a>

```go
func ResetIpCollection()
```

##### `ResetIpProtocol` <a name="ResetIpProtocol" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetIpProtocol"></a>

```go
func ResetIpProtocol()
```

##### `ResetIpVersion` <a name="ResetIpVersion" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetIpVersion"></a>

```go
func ResetIpVersion()
```

##### `ResetIsMirroringCollector` <a name="ResetIsMirroringCollector" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetIsMirroringCollector"></a>

```go
func ResetIsMirroringCollector()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLoadBalancingScheme` <a name="ResetLoadBalancingScheme" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetLoadBalancingScheme"></a>

```go
func ResetLoadBalancingScheme()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetNetworkTier` <a name="ResetNetworkTier" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetNetworkTier"></a>

```go
func ResetNetworkTier()
```

##### `ResetNoAutomateDnsZone` <a name="ResetNoAutomateDnsZone" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetNoAutomateDnsZone"></a>

```go
func ResetNoAutomateDnsZone()
```

##### `ResetPortRange` <a name="ResetPortRange" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetPortRange"></a>

```go
func ResetPortRange()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetPorts"></a>

```go
func ResetPorts()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRecreateClosedPsc` <a name="ResetRecreateClosedPsc" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetRecreateClosedPsc"></a>

```go
func ResetRecreateClosedPsc()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetServiceDirectoryRegistrations` <a name="ResetServiceDirectoryRegistrations" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetServiceDirectoryRegistrations"></a>

```go
func ResetServiceDirectoryRegistrations()
```

##### `ResetServiceLabel` <a name="ResetServiceLabel" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetServiceLabel"></a>

```go
func ResetServiceLabel()
```

##### `ResetSourceIpRanges` <a name="ResetSourceIpRanges" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetSourceIpRanges"></a>

```go
func ResetSourceIpRanges()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetTarget"></a>

```go
func ResetTarget()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeForwardingRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeforwardingrule"

computeforwardingrule.ComputeForwardingRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeforwardingrule"

computeforwardingrule.ComputeForwardingRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeforwardingrule"

computeforwardingrule.ComputeForwardingRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeforwardingrule"

computeforwardingrule.ComputeForwardingRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComputeForwardingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeForwardingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeForwardingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComputeForwardingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.baseForwardingRule">BaseForwardingRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.forwardingRuleId">ForwardingRuleId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.labelFingerprint">LabelFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.pscConnectionId">PscConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.pscConnectionStatus">PscConnectionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceDirectoryRegistrations">ServiceDirectoryRegistrations</a></code> | <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference">ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference">ComputeForwardingRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allowGlobalAccessInput">AllowGlobalAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allowPscGlobalAccessInput">AllowPscGlobalAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allPortsInput">AllPortsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.backendServiceInput">BackendServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipCollectionInput">IpCollectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipProtocolInput">IpProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipVersionInput">IpVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.isMirroringCollectorInput">IsMirroringCollectorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.loadBalancingSchemeInput">LoadBalancingSchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.networkTierInput">NetworkTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.noAutomateDnsZoneInput">NoAutomateDnsZoneInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.portRangeInput">PortRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.portsInput">PortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.recreateClosedPscInput">RecreateClosedPscInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceDirectoryRegistrationsInput">ServiceDirectoryRegistrationsInput</a></code> | <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations">ComputeForwardingRuleServiceDirectoryRegistrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceLabelInput">ServiceLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.sourceIpRangesInput">SourceIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allowGlobalAccess">AllowGlobalAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allowPscGlobalAccess">AllowPscGlobalAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allPorts">AllPorts</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.backendService">BackendService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipCollection">IpCollection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipVersion">IpVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.isMirroringCollector">IsMirroringCollector</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.networkTier">NetworkTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.noAutomateDnsZone">NoAutomateDnsZone</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.portRange">PortRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ports">Ports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.recreateClosedPsc">RecreateClosedPsc</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceLabel">ServiceLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.sourceIpRanges">SourceIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.target">Target</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BaseForwardingRule`<sup>Required</sup> <a name="BaseForwardingRule" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.baseForwardingRule"></a>

```go
func BaseForwardingRule() *string
```

- *Type:* *string

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ForwardingRuleId`<sup>Required</sup> <a name="ForwardingRuleId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.forwardingRuleId"></a>

```go
func ForwardingRuleId() *f64
```

- *Type:* *f64

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.labelFingerprint"></a>

```go
func LabelFingerprint() *string
```

- *Type:* *string

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.pscConnectionId"></a>

```go
func PscConnectionId() *string
```

- *Type:* *string

---

##### `PscConnectionStatus`<sup>Required</sup> <a name="PscConnectionStatus" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.pscConnectionStatus"></a>

```go
func PscConnectionStatus() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `ServiceDirectoryRegistrations`<sup>Required</sup> <a name="ServiceDirectoryRegistrations" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceDirectoryRegistrations"></a>

```go
func ServiceDirectoryRegistrations() ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference">ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference</a>

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.timeouts"></a>

```go
func Timeouts() ComputeForwardingRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference">ComputeForwardingRuleTimeoutsOutputReference</a>

---

##### `AllowGlobalAccessInput`<sup>Optional</sup> <a name="AllowGlobalAccessInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allowGlobalAccessInput"></a>

```go
func AllowGlobalAccessInput() interface{}
```

- *Type:* interface{}

---

##### `AllowPscGlobalAccessInput`<sup>Optional</sup> <a name="AllowPscGlobalAccessInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allowPscGlobalAccessInput"></a>

```go
func AllowPscGlobalAccessInput() interface{}
```

- *Type:* interface{}

---

##### `AllPortsInput`<sup>Optional</sup> <a name="AllPortsInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allPortsInput"></a>

```go
func AllPortsInput() interface{}
```

- *Type:* interface{}

---

##### `BackendServiceInput`<sup>Optional</sup> <a name="BackendServiceInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.backendServiceInput"></a>

```go
func BackendServiceInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `IpCollectionInput`<sup>Optional</sup> <a name="IpCollectionInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipCollectionInput"></a>

```go
func IpCollectionInput() *string
```

- *Type:* *string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipProtocolInput"></a>

```go
func IpProtocolInput() *string
```

- *Type:* *string

---

##### `IpVersionInput`<sup>Optional</sup> <a name="IpVersionInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipVersionInput"></a>

```go
func IpVersionInput() *string
```

- *Type:* *string

---

##### `IsMirroringCollectorInput`<sup>Optional</sup> <a name="IsMirroringCollectorInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.isMirroringCollectorInput"></a>

```go
func IsMirroringCollectorInput() interface{}
```

- *Type:* interface{}

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LoadBalancingSchemeInput`<sup>Optional</sup> <a name="LoadBalancingSchemeInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.loadBalancingSchemeInput"></a>

```go
func LoadBalancingSchemeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `NetworkTierInput`<sup>Optional</sup> <a name="NetworkTierInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.networkTierInput"></a>

```go
func NetworkTierInput() *string
```

- *Type:* *string

---

##### `NoAutomateDnsZoneInput`<sup>Optional</sup> <a name="NoAutomateDnsZoneInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.noAutomateDnsZoneInput"></a>

```go
func NoAutomateDnsZoneInput() interface{}
```

- *Type:* interface{}

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.portRangeInput"></a>

```go
func PortRangeInput() *string
```

- *Type:* *string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.portsInput"></a>

```go
func PortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RecreateClosedPscInput`<sup>Optional</sup> <a name="RecreateClosedPscInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.recreateClosedPscInput"></a>

```go
func RecreateClosedPscInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServiceDirectoryRegistrationsInput`<sup>Optional</sup> <a name="ServiceDirectoryRegistrationsInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceDirectoryRegistrationsInput"></a>

```go
func ServiceDirectoryRegistrationsInput() ComputeForwardingRuleServiceDirectoryRegistrations
```

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations">ComputeForwardingRuleServiceDirectoryRegistrations</a>

---

##### `ServiceLabelInput`<sup>Optional</sup> <a name="ServiceLabelInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceLabelInput"></a>

```go
func ServiceLabelInput() *string
```

- *Type:* *string

---

##### `SourceIpRangesInput`<sup>Optional</sup> <a name="SourceIpRangesInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.sourceIpRangesInput"></a>

```go
func SourceIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowGlobalAccess`<sup>Required</sup> <a name="AllowGlobalAccess" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allowGlobalAccess"></a>

```go
func AllowGlobalAccess() interface{}
```

- *Type:* interface{}

---

##### `AllowPscGlobalAccess`<sup>Required</sup> <a name="AllowPscGlobalAccess" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allowPscGlobalAccess"></a>

```go
func AllowPscGlobalAccess() interface{}
```

- *Type:* interface{}

---

##### `AllPorts`<sup>Required</sup> <a name="AllPorts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allPorts"></a>

```go
func AllPorts() interface{}
```

- *Type:* interface{}

---

##### `BackendService`<sup>Required</sup> <a name="BackendService" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.backendService"></a>

```go
func BackendService() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `IpCollection`<sup>Required</sup> <a name="IpCollection" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipCollection"></a>

```go
func IpCollection() *string
```

- *Type:* *string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipProtocol"></a>

```go
func IpProtocol() *string
```

- *Type:* *string

---

##### `IpVersion`<sup>Required</sup> <a name="IpVersion" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipVersion"></a>

```go
func IpVersion() *string
```

- *Type:* *string

---

##### `IsMirroringCollector`<sup>Required</sup> <a name="IsMirroringCollector" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.isMirroringCollector"></a>

```go
func IsMirroringCollector() interface{}
```

- *Type:* interface{}

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LoadBalancingScheme`<sup>Required</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.loadBalancingScheme"></a>

```go
func LoadBalancingScheme() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.networkTier"></a>

```go
func NetworkTier() *string
```

- *Type:* *string

---

##### `NoAutomateDnsZone`<sup>Required</sup> <a name="NoAutomateDnsZone" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.noAutomateDnsZone"></a>

```go
func NoAutomateDnsZone() interface{}
```

- *Type:* interface{}

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.portRange"></a>

```go
func PortRange() *string
```

- *Type:* *string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ports"></a>

```go
func Ports() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RecreateClosedPsc`<sup>Required</sup> <a name="RecreateClosedPsc" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.recreateClosedPsc"></a>

```go
func RecreateClosedPsc() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ServiceLabel`<sup>Required</sup> <a name="ServiceLabel" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceLabel"></a>

```go
func ServiceLabel() *string
```

- *Type:* *string

---

##### `SourceIpRanges`<sup>Required</sup> <a name="SourceIpRanges" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.sourceIpRanges"></a>

```go
func SourceIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeForwardingRuleConfig <a name="ComputeForwardingRuleConfig" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeforwardingrule"

&computeforwardingrule.ComputeForwardingRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AllowGlobalAccess: interface{},
	AllowPscGlobalAccess: interface{},
	AllPorts: interface{},
	BackendService: *string,
	Description: *string,
	Id: *string,
	IpAddress: *string,
	IpCollection: *string,
	IpProtocol: *string,
	IpVersion: *string,
	IsMirroringCollector: interface{},
	Labels: *map[string]*string,
	LoadBalancingScheme: *string,
	Network: *string,
	NetworkTier: *string,
	NoAutomateDnsZone: interface{},
	PortRange: *string,
	Ports: *[]*string,
	Project: *string,
	RecreateClosedPsc: interface{},
	Region: *string,
	ServiceDirectoryRegistrations: github.com/cdktf/cdktf-provider-google-go/google/v16.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations,
	ServiceLabel: *string,
	SourceIpRanges: *[]*string,
	Subnetwork: *string,
	Target: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.computeForwardingRule.ComputeForwardingRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.allowGlobalAccess">AllowGlobalAccess</a></code> | <code>interface{}</code> | This field is used along with the 'backend_service' field for internal load balancing or with the 'target' field for internal TargetInstance. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.allowPscGlobalAccess">AllowPscGlobalAccess</a></code> | <code>interface{}</code> | This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.allPorts">AllPorts</a></code> | <code>interface{}</code> | The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.backendService">BackendService</a></code> | <code>*string</code> | Identifies the backend service to which the forwarding rule sends traffic. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#id ComputeForwardingRule#id}. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.ipAddress">IpAddress</a></code> | <code>*string</code> | IP address for which this forwarding rule accepts traffic. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.ipCollection">IpCollection</a></code> | <code>*string</code> | Resource reference of a PublicDelegatedPrefix. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.ipVersion">IpVersion</a></code> | <code>*string</code> | The IP address version that will be used by this forwarding rule. Valid options are IPV4 and IPV6. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.isMirroringCollector">IsMirroringCollector</a></code> | <code>interface{}</code> | Indicates whether or not this load balancer can be used as a collector for packet mirroring. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels to apply to this forwarding rule.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>*string</code> | Specifies the forwarding rule type. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.network">Network</a></code> | <code>*string</code> | This field is not used for external load balancing. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.networkTier">NetworkTier</a></code> | <code>*string</code> | This signifies the networking tier used for configuring this load balancer and can only take the following values: 'PREMIUM', 'STANDARD'. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.noAutomateDnsZone">NoAutomateDnsZone</a></code> | <code>interface{}</code> | This is used in PSC consumer ForwardingRule to control whether it should try to auto-generate a DNS zone or not. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.portRange">PortRange</a></code> | <code>*string</code> | The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.ports">Ports</a></code> | <code>*[]*string</code> | The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#project ComputeForwardingRule#project}. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.recreateClosedPsc">RecreateClosedPsc</a></code> | <code>interface{}</code> | This is used in PSC consumer ForwardingRule to make terraform recreate the ForwardingRule when the status is closed. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.region">Region</a></code> | <code>*string</code> | A reference to the region where the regional forwarding rule resides. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.serviceDirectoryRegistrations">ServiceDirectoryRegistrations</a></code> | <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations">ComputeForwardingRuleServiceDirectoryRegistrations</a></code> | service_directory_registrations block. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.serviceLabel">ServiceLabel</a></code> | <code>*string</code> | An optional prefix to the service name for this Forwarding Rule. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.sourceIpRanges">SourceIpRanges</a></code> | <code>*[]*string</code> | If not empty, this Forwarding Rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | This field identifies the subnetwork that the load balanced IP should belong to for this Forwarding Rule, used in internal load balancing and network load balancing with IPv6. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.target">Target</a></code> | <code>*string</code> | The URL of the target resource to receive the matched traffic. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts">ComputeForwardingRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource;

provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).

Specifically, the name must be 1-63 characters long and match the regular
expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit, except the last character, which
cannot be a dash.

For Private Service Connect forwarding rules that forward traffic to Google
APIs, the forwarding rule name must be a 1-20 characters string with
lowercase letters and numbers and must start with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#name ComputeForwardingRule#name}

---

##### `AllowGlobalAccess`<sup>Optional</sup> <a name="AllowGlobalAccess" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.allowGlobalAccess"></a>

```go
AllowGlobalAccess interface{}
```

- *Type:* interface{}

This field is used along with the 'backend_service' field for internal load balancing or with the 'target' field for internal TargetInstance.

If the field is set to 'TRUE', clients can access ILB from all
regions.

Otherwise only allows access from clients in the same region as the
internal load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#allow_global_access ComputeForwardingRule#allow_global_access}

---

##### `AllowPscGlobalAccess`<sup>Optional</sup> <a name="AllowPscGlobalAccess" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.allowPscGlobalAccess"></a>

```go
AllowPscGlobalAccess interface{}
```

- *Type:* interface{}

This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#allow_psc_global_access ComputeForwardingRule#allow_psc_global_access}

---

##### `AllPorts`<sup>Optional</sup> <a name="AllPorts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.allPorts"></a>

```go
AllPorts interface{}
```

- *Type:* interface{}

The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive.

Only packets addressed to ports in the specified range will be forwarded
to the backends configured with this forwarding rule.

The 'allPorts' field has the following limitations:

* It requires that the forwarding rule 'IPProtocol' be TCP, UDP, SCTP, or
  L3_DEFAULT.
* It's applicable only to the following products: internal passthrough
  Network Load Balancers, backend service-based external passthrough Network
  Load Balancers, and internal and external protocol forwarding.
* Set this field to true to allow packets addressed to any port or packets
  lacking destination port information (for example, UDP fragments after the
  first fragment) to be forwarded to the backends configured with this
  forwarding rule. The L3_DEFAULT protocol requires 'allPorts' be set to
  true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#all_ports ComputeForwardingRule#all_ports}

---

##### `BackendService`<sup>Optional</sup> <a name="BackendService" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.backendService"></a>

```go
BackendService *string
```

- *Type:* *string

Identifies the backend service to which the forwarding rule sends traffic.

Required for Internal TCP/UDP Load Balancing and Network Load Balancing;
must be omitted for all other load balancer types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#backend_service ComputeForwardingRule#backend_service}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#description ComputeForwardingRule#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#id ComputeForwardingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

IP address for which this forwarding rule accepts traffic.

When a client
sends traffic to this IP address, the forwarding rule directs the traffic
to the referenced 'target' or 'backendService'.

While creating a forwarding rule, specifying an 'IPAddress' is
required under the following circumstances:

* When the 'target' is set to 'targetGrpcProxy' and
  'validateForProxyless' is set to 'true', the
  'IPAddress' should be set to '0.0.0.0'.
* When the 'target' is a Private Service Connect Google APIs
  bundle, you must specify an 'IPAddress'.

Otherwise, you can optionally specify an IP address that references an
existing static (reserved) IP address resource. When omitted, Google Cloud
assigns an ephemeral IP address.

Use one of the following formats to specify an IP address while creating a
forwarding rule:

* IP address number, as in '100.1.2.3'
* IPv6 address range, as in '2600:1234::/96'
* Full resource URL, as in
  'https://www.googleapis.com/compute/v1/projects/project_id/regions/region/addresses/address-name'
* Partial URL or by name, as in:

  * 'projects/project_id/regions/region/addresses/address-name'
  * 'regions/region/addresses/address-name'
  * 'global/addresses/address-name'
  * 'address-name'

The forwarding rule's 'target' or 'backendService',
and in most cases, also the 'loadBalancingScheme', determine the
type of IP address that you can use. For detailed information, see
[IP address
specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).

When reading an 'IPAddress', the API always returns the IP
address number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#ip_address ComputeForwardingRule#ip_address}

---

##### `IpCollection`<sup>Optional</sup> <a name="IpCollection" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.ipCollection"></a>

```go
IpCollection *string
```

- *Type:* *string

Resource reference of a PublicDelegatedPrefix.

The PDP must be a sub-PDP
in EXTERNAL_IPV6_FORWARDING_RULE_CREATION mode.
Use one of the following formats to specify a sub-PDP when creating an
IPv6 NetLB forwarding rule using BYOIP:
Full resource URL, as in:

* 'https://www.googleapis.com/compute/v1/projects/{{projectId}}/regions/{{region}}/publicDelegatedPrefixes/{{sub-pdp-name}}'
  Partial URL, as in:
* 'projects/{{projectId}}/regions/region/publicDelegatedPrefixes/{{sub-pdp-name}}'
* 'regions/{{region}}/publicDelegatedPrefixes/{{sub-pdp-name}}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#ip_collection ComputeForwardingRule#ip_collection}

---

##### `IpProtocol`<sup>Optional</sup> <a name="IpProtocol" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.ipProtocol"></a>

```go
IpProtocol *string
```

- *Type:* *string

The IP protocol to which this rule applies.

For protocol forwarding, valid
options are 'TCP', 'UDP', 'ESP',
'AH', 'SCTP', 'ICMP' and
'L3_DEFAULT'.

The valid IP protocols are different for different load balancing products
as described in [Load balancing
features](https://cloud.google.com/load-balancing/docs/features#protocols_from_the_load_balancer_to_the_backends).

A Forwarding Rule with protocol L3_DEFAULT can attach with target instance or
backend service with UNSPECIFIED protocol.
A forwarding rule with "L3_DEFAULT" IPProtocal cannot be attached to a backend service with TCP or UDP. Possible values: ["TCP", "UDP", "ESP", "AH", "SCTP", "ICMP", "L3_DEFAULT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#ip_protocol ComputeForwardingRule#ip_protocol}

---

##### `IpVersion`<sup>Optional</sup> <a name="IpVersion" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.ipVersion"></a>

```go
IpVersion *string
```

- *Type:* *string

The IP address version that will be used by this forwarding rule. Valid options are IPV4 and IPV6.

If not set, the IPv4 address will be used by default. Possible values: ["IPV4", "IPV6"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#ip_version ComputeForwardingRule#ip_version}

---

##### `IsMirroringCollector`<sup>Optional</sup> <a name="IsMirroringCollector" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.isMirroringCollector"></a>

```go
IsMirroringCollector interface{}
```

- *Type:* interface{}

Indicates whether or not this load balancer can be used as a collector for packet mirroring.

To prevent mirroring loops, instances behind this
load balancer will not have their traffic mirrored even if a
'PacketMirroring' rule applies to them.

This can only be set to true for load balancers that have their
'loadBalancingScheme' set to 'INTERNAL'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#is_mirroring_collector ComputeForwardingRule#is_mirroring_collector}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels to apply to this forwarding rule.  A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#labels ComputeForwardingRule#labels}

---

##### `LoadBalancingScheme`<sup>Optional</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.loadBalancingScheme"></a>

```go
LoadBalancingScheme *string
```

- *Type:* *string

Specifies the forwarding rule type.

Note that an empty string value ('""') is also supported for some use
cases, for example PSC (private service connection) regional forwarding
rules.

For more information about forwarding rules, refer to
[Forwarding rule concepts](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts). Default value: "EXTERNAL" Possible values: ["EXTERNAL", "EXTERNAL_MANAGED", "INTERNAL", "INTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#load_balancing_scheme ComputeForwardingRule#load_balancing_scheme}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

This field is not used for external load balancing.

For Internal TCP/UDP Load Balancing, this field identifies the network that
the load balanced IP should belong to for this Forwarding Rule.
If the subnetwork is specified, the network of the subnetwork will be used.
If neither subnetwork nor this field is specified, the default network will
be used.

For Private Service Connect forwarding rules that forward traffic to Google
APIs, a network must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#network ComputeForwardingRule#network}

---

##### `NetworkTier`<sup>Optional</sup> <a name="NetworkTier" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.networkTier"></a>

```go
NetworkTier *string
```

- *Type:* *string

This signifies the networking tier used for configuring this load balancer and can only take the following values: 'PREMIUM', 'STANDARD'.

For regional ForwardingRule, the valid values are 'PREMIUM' and
'STANDARD'. For GlobalForwardingRule, the valid value is
'PREMIUM'.

If this field is not specified, it is assumed to be 'PREMIUM'.
If 'IPAddress' is specified, this value must be equal to the
networkTier of the Address. Possible values: ["PREMIUM", "STANDARD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#network_tier ComputeForwardingRule#network_tier}

---

##### `NoAutomateDnsZone`<sup>Optional</sup> <a name="NoAutomateDnsZone" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.noAutomateDnsZone"></a>

```go
NoAutomateDnsZone interface{}
```

- *Type:* interface{}

This is used in PSC consumer ForwardingRule to control whether it should try to auto-generate a DNS zone or not.

Non-PSC forwarding rules do not use this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#no_automate_dns_zone ComputeForwardingRule#no_automate_dns_zone}

---

##### `PortRange`<sup>Optional</sup> <a name="PortRange" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.portRange"></a>

```go
PortRange *string
```

- *Type:* *string

The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive.

Only packets addressed to ports in the specified range will be forwarded
to the backends configured with this forwarding rule.

The 'portRange' field has the following limitations:

* It requires that the forwarding rule 'IPProtocol' be TCP, UDP, or SCTP,
  and
* It's applicable only to the following products: external passthrough
  Network Load Balancers, internal and external proxy Network Load
  Balancers, internal and external Application Load Balancers, external
  protocol forwarding, and Classic VPN.
* Some products have restrictions on what ports can be used. See
  [port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#port_specifications)
  for details.

For external forwarding rules, two or more forwarding rules cannot use the
same '[IPAddress, IPProtocol]' pair, and cannot have overlapping
'portRange's.

For internal forwarding rules within the same VPC network, two or more
forwarding rules cannot use the same '[IPAddress, IPProtocol]' pair, and
cannot have overlapping 'portRange's.

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.ports"></a>

```go
Ports *[]*string
```

- *Type:* *[]*string

The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive.

Only packets addressed to ports in the specified range will be forwarded
to the backends configured with this forwarding rule.

The 'ports' field has the following limitations:

* It requires that the forwarding rule 'IPProtocol' be TCP, UDP, or SCTP,
  and
* It's applicable only to the following products: internal passthrough
  Network Load Balancers, backend service-based external passthrough Network
  Load Balancers, and internal protocol forwarding.
* You can specify a list of up to five ports by number, separated by
  commas. The ports can be contiguous or discontiguous.

For external forwarding rules, two or more forwarding rules cannot use the
same '[IPAddress, IPProtocol]' pair if they share at least one port
number.

For internal forwarding rules within the same VPC network, two or more
forwarding rules cannot use the same '[IPAddress, IPProtocol]' pair if
they share at least one port number.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#project ComputeForwardingRule#project}.

---

##### `RecreateClosedPsc`<sup>Optional</sup> <a name="RecreateClosedPsc" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.recreateClosedPsc"></a>

```go
RecreateClosedPsc interface{}
```

- *Type:* interface{}

This is used in PSC consumer ForwardingRule to make terraform recreate the ForwardingRule when the status is closed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#recreate_closed_psc ComputeForwardingRule#recreate_closed_psc}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

A reference to the region where the regional forwarding rule resides.

This field is not applicable to global forwarding rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#region ComputeForwardingRule#region}

---

##### `ServiceDirectoryRegistrations`<sup>Optional</sup> <a name="ServiceDirectoryRegistrations" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.serviceDirectoryRegistrations"></a>

```go
ServiceDirectoryRegistrations ComputeForwardingRuleServiceDirectoryRegistrations
```

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations">ComputeForwardingRuleServiceDirectoryRegistrations</a>

service_directory_registrations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#service_directory_registrations ComputeForwardingRule#service_directory_registrations}

---

##### `ServiceLabel`<sup>Optional</sup> <a name="ServiceLabel" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.serviceLabel"></a>

```go
ServiceLabel *string
```

- *Type:* *string

An optional prefix to the service name for this Forwarding Rule.

If specified, will be the first label of the fully qualified service
name.

The label must be 1-63 characters long, and comply with RFC1035.
Specifically, the label must be 1-63 characters long and match the
regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

This field is only used for INTERNAL load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#service_label ComputeForwardingRule#service_label}

---

##### `SourceIpRanges`<sup>Optional</sup> <a name="SourceIpRanges" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.sourceIpRanges"></a>

```go
SourceIpRanges *[]*string
```

- *Type:* *[]*string

If not empty, this Forwarding Rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here.

Note that a Forwarding Rule can only have up to 64 source IP ranges, and this field can only be used with a regional Forwarding Rule whose scheme is EXTERNAL. Each sourceIpRange entry should be either an IP address (for example, 1.2.3.4) or a CIDR range (for example, 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#source_ip_ranges ComputeForwardingRule#source_ip_ranges}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

This field identifies the subnetwork that the load balanced IP should belong to for this Forwarding Rule, used in internal load balancing and network load balancing with IPv6.

If the network specified is in auto subnet mode, this field is optional.
However, a subnetwork must be specified if the network is in custom subnet
mode or when creating external forwarding rule with IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#subnetwork ComputeForwardingRule#subnetwork}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.target"></a>

```go
Target *string
```

- *Type:* *string

The URL of the target resource to receive the matched traffic.

For
regional forwarding rules, this target must be in the same region as the
forwarding rule. For global forwarding rules, this target must be a global
load balancing resource.

The forwarded traffic must be of a type appropriate to the target object.

* For load balancers, see the "Target" column in [Port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).
* For Private Service Connect forwarding rules that forward traffic to Google APIs, provide the name of a supported Google API bundle:
* 'vpc-sc' - [ APIs that support VPC Service Controls](https://cloud.google.com/vpc-service-controls/docs/supported-products).
* 'all-apis' - [All supported Google APIs](https://cloud.google.com/vpc/docs/private-service-connect#supported-apis).

For Private Service Connect forwarding rules that forward traffic to managed services, the target must be a service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#target ComputeForwardingRule#target}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.timeouts"></a>

```go
Timeouts ComputeForwardingRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts">ComputeForwardingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#timeouts ComputeForwardingRule#timeouts}

---

### ComputeForwardingRuleServiceDirectoryRegistrations <a name="ComputeForwardingRuleServiceDirectoryRegistrations" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeforwardingrule"

&computeforwardingrule.ComputeForwardingRuleServiceDirectoryRegistrations {
	Namespace: *string,
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations.property.namespace">Namespace</a></code> | <code>*string</code> | Service Directory namespace to register the forwarding rule under. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations.property.service">Service</a></code> | <code>*string</code> | Service Directory service to register the forwarding rule under. |

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Service Directory namespace to register the forwarding rule under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#namespace ComputeForwardingRule#namespace}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations.property.service"></a>

```go
Service *string
```

- *Type:* *string

Service Directory service to register the forwarding rule under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#service ComputeForwardingRule#service}

---

### ComputeForwardingRuleTimeouts <a name="ComputeForwardingRuleTimeouts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeforwardingrule"

&computeforwardingrule.ComputeForwardingRuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#create ComputeForwardingRule#create}. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#delete ComputeForwardingRule#delete}. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#update ComputeForwardingRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#create ComputeForwardingRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#delete ComputeForwardingRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_forwarding_rule#update ComputeForwardingRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference <a name="ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeforwardingrule"

computeforwardingrule.NewComputeForwardingRuleServiceDirectoryRegistrationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resetService"></a>

```go
func ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations">ComputeForwardingRuleServiceDirectoryRegistrations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeForwardingRuleServiceDirectoryRegistrations
```

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations">ComputeForwardingRuleServiceDirectoryRegistrations</a>

---


### ComputeForwardingRuleTimeoutsOutputReference <a name="ComputeForwardingRuleTimeoutsOutputReference" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computeforwardingrule"

computeforwardingrule.NewComputeForwardingRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeForwardingRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



