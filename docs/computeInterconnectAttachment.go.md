# `computeInterconnectAttachment` Submodule <a name="`computeInterconnectAttachment` Submodule" id="@cdktf/provider-google.computeInterconnectAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInterconnectAttachment <a name="ComputeInterconnectAttachment" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment google_compute_interconnect_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnectattachment"

computeinterconnectattachment.NewComputeInterconnectAttachment(scope Construct, id *string, config ComputeInterconnectAttachmentConfig) ComputeInterconnectAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig">ComputeInterconnectAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig">ComputeInterconnectAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetAdminEnabled">ResetAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetBandwidth">ResetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetCandidateSubnets">ResetCandidateSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetEdgeAvailabilityDomain">ResetEdgeAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetInterconnect">ResetInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetIpsecInternalAddresses">ResetIpsecInternalAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetVlanTag8021Q">ResetVlanTag8021Q</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.putTimeouts"></a>

```go
func PutTimeouts(value ComputeInterconnectAttachmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts">ComputeInterconnectAttachmentTimeouts</a>

---

##### `ResetAdminEnabled` <a name="ResetAdminEnabled" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetAdminEnabled"></a>

```go
func ResetAdminEnabled()
```

##### `ResetBandwidth` <a name="ResetBandwidth" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetBandwidth"></a>

```go
func ResetBandwidth()
```

##### `ResetCandidateSubnets` <a name="ResetCandidateSubnets" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetCandidateSubnets"></a>

```go
func ResetCandidateSubnets()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEdgeAvailabilityDomain` <a name="ResetEdgeAvailabilityDomain" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetEdgeAvailabilityDomain"></a>

```go
func ResetEdgeAvailabilityDomain()
```

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetEncryption"></a>

```go
func ResetEncryption()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetId"></a>

```go
func ResetId()
```

##### `ResetInterconnect` <a name="ResetInterconnect" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetInterconnect"></a>

```go
func ResetInterconnect()
```

##### `ResetIpsecInternalAddresses` <a name="ResetIpsecInternalAddresses" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetIpsecInternalAddresses"></a>

```go
func ResetIpsecInternalAddresses()
```

##### `ResetMtu` <a name="ResetMtu" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetMtu"></a>

```go
func ResetMtu()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetType"></a>

```go
func ResetType()
```

##### `ResetVlanTag8021Q` <a name="ResetVlanTag8021Q" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetVlanTag8021Q"></a>

```go
func ResetVlanTag8021Q()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnectattachment"

computeinterconnectattachment.ComputeInterconnectAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnectattachment"

computeinterconnectattachment.ComputeInterconnectAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnectattachment"

computeinterconnectattachment.ComputeInterconnectAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.cloudRouterIpAddress">CloudRouterIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.customerRouterIpAddress">CustomerRouterIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.googleReferenceId">GoogleReferenceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.pairingKey">PairingKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.partnerAsn">PartnerAsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.privateInterconnectInfo">PrivateInterconnectInfo</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList">ComputeInterconnectAttachmentPrivateInterconnectInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference">ComputeInterconnectAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.adminEnabledInput">AdminEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.bandwidthInput">BandwidthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateSubnetsInput">CandidateSubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.edgeAvailabilityDomainInput">EdgeAvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.encryptionInput">EncryptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.interconnectInput">InterconnectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.ipsecInternalAddressesInput">IpsecInternalAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.mtuInput">MtuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.routerInput">RouterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.vlanTag8021QInput">VlanTag8021QInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.adminEnabled">AdminEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.bandwidth">Bandwidth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateSubnets">CandidateSubnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.edgeAvailabilityDomain">EdgeAvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.encryption">Encryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.interconnect">Interconnect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.ipsecInternalAddresses">IpsecInternalAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.mtu">Mtu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.router">Router</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.vlanTag8021Q">VlanTag8021Q</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudRouterIpAddress`<sup>Required</sup> <a name="CloudRouterIpAddress" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.cloudRouterIpAddress"></a>

```go
func CloudRouterIpAddress() *string
```

- *Type:* *string

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `CustomerRouterIpAddress`<sup>Required</sup> <a name="CustomerRouterIpAddress" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.customerRouterIpAddress"></a>

```go
func CustomerRouterIpAddress() *string
```

- *Type:* *string

---

##### `GoogleReferenceId`<sup>Required</sup> <a name="GoogleReferenceId" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.googleReferenceId"></a>

```go
func GoogleReferenceId() *string
```

- *Type:* *string

---

##### `PairingKey`<sup>Required</sup> <a name="PairingKey" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.pairingKey"></a>

```go
func PairingKey() *string
```

- *Type:* *string

---

##### `PartnerAsn`<sup>Required</sup> <a name="PartnerAsn" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.partnerAsn"></a>

```go
func PartnerAsn() *string
```

- *Type:* *string

---

##### `PrivateInterconnectInfo`<sup>Required</sup> <a name="PrivateInterconnectInfo" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.privateInterconnectInfo"></a>

```go
func PrivateInterconnectInfo() ComputeInterconnectAttachmentPrivateInterconnectInfoList
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList">ComputeInterconnectAttachmentPrivateInterconnectInfoList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.timeouts"></a>

```go
func Timeouts() ComputeInterconnectAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference">ComputeInterconnectAttachmentTimeoutsOutputReference</a>

---

##### `AdminEnabledInput`<sup>Optional</sup> <a name="AdminEnabledInput" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.adminEnabledInput"></a>

```go
func AdminEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `BandwidthInput`<sup>Optional</sup> <a name="BandwidthInput" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.bandwidthInput"></a>

```go
func BandwidthInput() *string
```

- *Type:* *string

---

##### `CandidateSubnetsInput`<sup>Optional</sup> <a name="CandidateSubnetsInput" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateSubnetsInput"></a>

```go
func CandidateSubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EdgeAvailabilityDomainInput`<sup>Optional</sup> <a name="EdgeAvailabilityDomainInput" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.edgeAvailabilityDomainInput"></a>

```go
func EdgeAvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.encryptionInput"></a>

```go
func EncryptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InterconnectInput`<sup>Optional</sup> <a name="InterconnectInput" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.interconnectInput"></a>

```go
func InterconnectInput() *string
```

- *Type:* *string

---

##### `IpsecInternalAddressesInput`<sup>Optional</sup> <a name="IpsecInternalAddressesInput" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.ipsecInternalAddressesInput"></a>

```go
func IpsecInternalAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.mtuInput"></a>

```go
func MtuInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RouterInput`<sup>Optional</sup> <a name="RouterInput" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.routerInput"></a>

```go
func RouterInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VlanTag8021QInput`<sup>Optional</sup> <a name="VlanTag8021QInput" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.vlanTag8021QInput"></a>

```go
func VlanTag8021QInput() *f64
```

- *Type:* *f64

---

##### `AdminEnabled`<sup>Required</sup> <a name="AdminEnabled" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.adminEnabled"></a>

```go
func AdminEnabled() interface{}
```

- *Type:* interface{}

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.bandwidth"></a>

```go
func Bandwidth() *string
```

- *Type:* *string

---

##### `CandidateSubnets`<sup>Required</sup> <a name="CandidateSubnets" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateSubnets"></a>

```go
func CandidateSubnets() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EdgeAvailabilityDomain`<sup>Required</sup> <a name="EdgeAvailabilityDomain" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.edgeAvailabilityDomain"></a>

```go
func EdgeAvailabilityDomain() *string
```

- *Type:* *string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.encryption"></a>

```go
func Encryption() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Interconnect`<sup>Required</sup> <a name="Interconnect" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.interconnect"></a>

```go
func Interconnect() *string
```

- *Type:* *string

---

##### `IpsecInternalAddresses`<sup>Required</sup> <a name="IpsecInternalAddresses" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.ipsecInternalAddresses"></a>

```go
func IpsecInternalAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.mtu"></a>

```go
func Mtu() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.router"></a>

```go
func Router() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VlanTag8021Q`<sup>Required</sup> <a name="VlanTag8021Q" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.vlanTag8021Q"></a>

```go
func VlanTag8021Q() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInterconnectAttachmentConfig <a name="ComputeInterconnectAttachmentConfig" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnectattachment"

&computeinterconnectattachment.ComputeInterconnectAttachmentConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Router: *string,
	AdminEnabled: interface{},
	Bandwidth: *string,
	CandidateSubnets: *[]*string,
	Description: *string,
	EdgeAvailabilityDomain: *string,
	Encryption: *string,
	Id: *string,
	Interconnect: *string,
	IpsecInternalAddresses: *[]*string,
	Mtu: *string,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts,
	Type: *string,
	VlanTag8021Q: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.router">Router</a></code> | <code>*string</code> | URL of the cloud router to be used for dynamic routing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.adminEnabled">AdminEnabled</a></code> | <code>interface{}</code> | Whether the VLAN attachment is enabled or disabled.  When using PARTNER type this will Pre-Activate the interconnect attachment. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.bandwidth">Bandwidth</a></code> | <code>*string</code> | Provisioned bandwidth capacity for the interconnect attachment. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.candidateSubnets">CandidateSubnets</a></code> | <code>*[]*string</code> | Up to 16 candidate prefixes that can be used to restrict the allocation of cloudRouterIpAddress and customerRouterIpAddress for this attachment. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.edgeAvailabilityDomain">EdgeAvailabilityDomain</a></code> | <code>*string</code> | Desired availability domain for the attachment. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.encryption">Encryption</a></code> | <code>*string</code> | Indicates the user-supplied encryption option of this interconnect attachment. Can only be specified at attachment creation for PARTNER or DEDICATED attachments. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment#id ComputeInterconnectAttachment#id}. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.interconnect">Interconnect</a></code> | <code>*string</code> | URL of the underlying Interconnect object that this attachment's traffic will traverse through. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.ipsecInternalAddresses">IpsecInternalAddresses</a></code> | <code>*[]*string</code> | URL of addresses that have been reserved for the interconnect attachment, Used only for interconnect attachment that has the encryption option as IPSEC. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.mtu">Mtu</a></code> | <code>*string</code> | Maximum Transmission Unit (MTU), in bytes, of packets passing through this interconnect attachment. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment#project ComputeInterconnectAttachment#project}. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.region">Region</a></code> | <code>*string</code> | Region where the regional interconnect attachment resides. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts">ComputeInterconnectAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.type">Type</a></code> | <code>*string</code> | The type of InterconnectAttachment you wish to create. Defaults to DEDICATED. Possible values: ["DEDICATED", "PARTNER", "PARTNER_PROVIDER"]. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.vlanTag8021Q">VlanTag8021Q</a></code> | <code>*f64</code> | The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When using PARTNER type this will be managed upstream. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is created. The
name must be 1-63 characters long, and comply with RFC1035. Specifically, the
name must be 1-63 characters long and match the regular expression
'[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first character must be a
lowercase letter, and all following characters must be a dash, lowercase
letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment#name ComputeInterconnectAttachment#name}

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.router"></a>

```go
Router *string
```

- *Type:* *string

URL of the cloud router to be used for dynamic routing.

This router must be in
the same region as this InterconnectAttachment. The InterconnectAttachment will
automatically connect the Interconnect to the network & region within which the
Cloud Router is configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment#router ComputeInterconnectAttachment#router}

---

##### `AdminEnabled`<sup>Optional</sup> <a name="AdminEnabled" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.adminEnabled"></a>

```go
AdminEnabled interface{}
```

- *Type:* interface{}

Whether the VLAN attachment is enabled or disabled.  When using PARTNER type this will Pre-Activate the interconnect attachment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment#admin_enabled ComputeInterconnectAttachment#admin_enabled}

---

##### `Bandwidth`<sup>Optional</sup> <a name="Bandwidth" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.bandwidth"></a>

```go
Bandwidth *string
```

- *Type:* *string

Provisioned bandwidth capacity for the interconnect attachment.

For attachments of type DEDICATED, the user can set the bandwidth.
For attachments of type PARTNER, the Google Partner that is operating the interconnect must set the bandwidth.
Output only for PARTNER type, mutable for PARTNER_PROVIDER and DEDICATED,
Defaults to BPS_10G Possible values: ["BPS_50M", "BPS_100M", "BPS_200M", "BPS_300M", "BPS_400M", "BPS_500M", "BPS_1G", "BPS_2G", "BPS_5G", "BPS_10G", "BPS_20G", "BPS_50G"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment#bandwidth ComputeInterconnectAttachment#bandwidth}

---

##### `CandidateSubnets`<sup>Optional</sup> <a name="CandidateSubnets" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.candidateSubnets"></a>

```go
CandidateSubnets *[]*string
```

- *Type:* *[]*string

Up to 16 candidate prefixes that can be used to restrict the allocation of cloudRouterIpAddress and customerRouterIpAddress for this attachment.

All prefixes must be within link-local address space (169.254.0.0/16)
and must be /29 or shorter (/28, /27, etc). Google will attempt to select
an unused /29 from the supplied candidate prefix(es). The request will
fail if all possible /29s are in use on Google's edge. If not supplied,
Google will randomly select an unused /29 from all of link-local space.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment#candidate_subnets ComputeInterconnectAttachment#candidate_subnets}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment#description ComputeInterconnectAttachment#description}

---

##### `EdgeAvailabilityDomain`<sup>Optional</sup> <a name="EdgeAvailabilityDomain" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.edgeAvailabilityDomain"></a>

```go
EdgeAvailabilityDomain *string
```

- *Type:* *string

Desired availability domain for the attachment.

Only available for type
PARTNER, at creation time. For improved reliability, customers should
configure a pair of attachments with one per availability domain. The
selected availability domain will be provided to the Partner via the
pairing key so that the provisioned circuit will lie in the specified
domain. If not specified, the value will default to AVAILABILITY_DOMAIN_ANY.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment#edge_availability_domain ComputeInterconnectAttachment#edge_availability_domain}

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.encryption"></a>

```go
Encryption *string
```

- *Type:* *string

Indicates the user-supplied encryption option of this interconnect attachment. Can only be specified at attachment creation for PARTNER or DEDICATED attachments.

NONE - This is the default value, which means that the VLAN attachment
carries unencrypted traffic. VMs are able to send traffic to, or receive
traffic from, such a VLAN attachment.

IPSEC - The VLAN attachment carries only encrypted traffic that is
encrypted by an IPsec device, such as an HA VPN gateway or third-party
IPsec VPN. VMs cannot directly send traffic to, or receive traffic from,
such a VLAN attachment. To use HA VPN over Cloud Interconnect, the VLAN
attachment must be created with this option. Default value: "NONE" Possible values: ["NONE", "IPSEC"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment#encryption ComputeInterconnectAttachment#encryption}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment#id ComputeInterconnectAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Interconnect`<sup>Optional</sup> <a name="Interconnect" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.interconnect"></a>

```go
Interconnect *string
```

- *Type:* *string

URL of the underlying Interconnect object that this attachment's traffic will traverse through.

Required if type is DEDICATED, must not
be set if type is PARTNER.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment#interconnect ComputeInterconnectAttachment#interconnect}

---

##### `IpsecInternalAddresses`<sup>Optional</sup> <a name="IpsecInternalAddresses" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.ipsecInternalAddresses"></a>

```go
IpsecInternalAddresses *[]*string
```

- *Type:* *[]*string

URL of addresses that have been reserved for the interconnect attachment, Used only for interconnect attachment that has the encryption option as IPSEC.

The addresses must be RFC 1918 IP address ranges. When creating HA VPN
gateway over the interconnect attachment, if the attachment is configured
to use an RFC 1918 IP address, then the VPN gateway's IP address will be
allocated from the IP address range specified here.

For example, if the HA VPN gateway's interface 0 is paired to this
interconnect attachment, then an RFC 1918 IP address for the VPN gateway
interface 0 will be allocated from the IP address specified for this
interconnect attachment.

If this field is not specified for interconnect attachment that has
encryption option as IPSEC, later on when creating HA VPN gateway on this
interconnect attachment, the HA VPN gateway's IP address will be
allocated from regional external IP address pool.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment#ipsec_internal_addresses ComputeInterconnectAttachment#ipsec_internal_addresses}

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.mtu"></a>

```go
Mtu *string
```

- *Type:* *string

Maximum Transmission Unit (MTU), in bytes, of packets passing through this interconnect attachment.

Currently, only 1440 and 1500 are allowed. If not specified, the value will default to 1440.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment#mtu ComputeInterconnectAttachment#mtu}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment#project ComputeInterconnectAttachment#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where the regional interconnect attachment resides.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment#region ComputeInterconnectAttachment#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.timeouts"></a>

```go
Timeouts ComputeInterconnectAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts">ComputeInterconnectAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment#timeouts ComputeInterconnectAttachment#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of InterconnectAttachment you wish to create. Defaults to DEDICATED. Possible values: ["DEDICATED", "PARTNER", "PARTNER_PROVIDER"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment#type ComputeInterconnectAttachment#type}

---

##### `VlanTag8021Q`<sup>Optional</sup> <a name="VlanTag8021Q" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.vlanTag8021Q"></a>

```go
VlanTag8021Q *f64
```

- *Type:* *f64

The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When using PARTNER type this will be managed upstream.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment#vlan_tag8021q ComputeInterconnectAttachment#vlan_tag8021q}

---

### ComputeInterconnectAttachmentPrivateInterconnectInfo <a name="ComputeInterconnectAttachmentPrivateInterconnectInfo" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnectattachment"

&computeinterconnectattachment.ComputeInterconnectAttachmentPrivateInterconnectInfo {

}
```


### ComputeInterconnectAttachmentTimeouts <a name="ComputeInterconnectAttachmentTimeouts" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnectattachment"

&computeinterconnectattachment.ComputeInterconnectAttachmentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment#create ComputeInterconnectAttachment#create}. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment#delete ComputeInterconnectAttachment#delete}. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment#update ComputeInterconnectAttachment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment#create ComputeInterconnectAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment#delete ComputeInterconnectAttachment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment#update ComputeInterconnectAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInterconnectAttachmentPrivateInterconnectInfoList <a name="ComputeInterconnectAttachmentPrivateInterconnectInfoList" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnectattachment"

computeinterconnectattachment.NewComputeInterconnectAttachmentPrivateInterconnectInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeInterconnectAttachmentPrivateInterconnectInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.get"></a>

```go
func Get(index *f64) ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference <a name="ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnectattachment"

computeinterconnectattachment.NewComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.tag8021Q">Tag8021Q</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfo">ComputeInterconnectAttachmentPrivateInterconnectInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tag8021Q`<sup>Required</sup> <a name="Tag8021Q" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.tag8021Q"></a>

```go
func Tag8021Q() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeInterconnectAttachmentPrivateInterconnectInfo
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfo">ComputeInterconnectAttachmentPrivateInterconnectInfo</a>

---


### ComputeInterconnectAttachmentTimeoutsOutputReference <a name="ComputeInterconnectAttachmentTimeoutsOutputReference" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnectattachment"

computeinterconnectattachment.NewComputeInterconnectAttachmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeInterconnectAttachmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



