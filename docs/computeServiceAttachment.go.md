# `computeServiceAttachment` Submodule <a name="`computeServiceAttachment` Submodule" id="@cdktf/provider-google.computeServiceAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeServiceAttachment <a name="ComputeServiceAttachment" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment google_compute_service_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeserviceattachment"

computeserviceattachment.NewComputeServiceAttachment(scope Construct, id *string, config ComputeServiceAttachmentConfig) ComputeServiceAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig">ComputeServiceAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig">ComputeServiceAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.putConsumerAcceptLists">PutConsumerAcceptLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetConsumerAcceptLists">ResetConsumerAcceptLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetConsumerRejectLists">ResetConsumerRejectLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetDomainNames">ResetDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutConsumerAcceptLists` <a name="PutConsumerAcceptLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.putConsumerAcceptLists"></a>

```go
func PutConsumerAcceptLists(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.putConsumerAcceptLists.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.putTimeouts"></a>

```go
func PutTimeouts(value ComputeServiceAttachmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts">ComputeServiceAttachmentTimeouts</a>

---

##### `ResetConsumerAcceptLists` <a name="ResetConsumerAcceptLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetConsumerAcceptLists"></a>

```go
func ResetConsumerAcceptLists()
```

##### `ResetConsumerRejectLists` <a name="ResetConsumerRejectLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetConsumerRejectLists"></a>

```go
func ResetConsumerRejectLists()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDomainNames` <a name="ResetDomainNames" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetDomainNames"></a>

```go
func ResetDomainNames()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeserviceattachment"

computeserviceattachment.ComputeServiceAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeserviceattachment"

computeserviceattachment.ComputeServiceAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeserviceattachment"

computeserviceattachment.ComputeServiceAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectedEndpoints">ConnectedEndpoints</a></code> | <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList">ComputeServiceAttachmentConnectedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerAcceptLists">ConsumerAcceptLists</a></code> | <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList">ComputeServiceAttachmentConsumerAcceptListsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference">ComputeServiceAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectionPreferenceInput">ConnectionPreferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerAcceptListsInput">ConsumerAcceptListsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerRejectListsInput">ConsumerRejectListsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.domainNamesInput">DomainNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.enableProxyProtocolInput">EnableProxyProtocolInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.natSubnetsInput">NatSubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.targetServiceInput">TargetServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectionPreference">ConnectionPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerRejectLists">ConsumerRejectLists</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.domainNames">DomainNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.enableProxyProtocol">EnableProxyProtocol</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.natSubnets">NatSubnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.targetService">TargetService</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectedEndpoints`<sup>Required</sup> <a name="ConnectedEndpoints" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectedEndpoints"></a>

```go
func ConnectedEndpoints() ComputeServiceAttachmentConnectedEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList">ComputeServiceAttachmentConnectedEndpointsList</a>

---

##### `ConsumerAcceptLists`<sup>Required</sup> <a name="ConsumerAcceptLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerAcceptLists"></a>

```go
func ConsumerAcceptLists() ComputeServiceAttachmentConsumerAcceptListsList
```

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList">ComputeServiceAttachmentConsumerAcceptListsList</a>

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.timeouts"></a>

```go
func Timeouts() ComputeServiceAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference">ComputeServiceAttachmentTimeoutsOutputReference</a>

---

##### `ConnectionPreferenceInput`<sup>Optional</sup> <a name="ConnectionPreferenceInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectionPreferenceInput"></a>

```go
func ConnectionPreferenceInput() *string
```

- *Type:* *string

---

##### `ConsumerAcceptListsInput`<sup>Optional</sup> <a name="ConsumerAcceptListsInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerAcceptListsInput"></a>

```go
func ConsumerAcceptListsInput() interface{}
```

- *Type:* interface{}

---

##### `ConsumerRejectListsInput`<sup>Optional</sup> <a name="ConsumerRejectListsInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerRejectListsInput"></a>

```go
func ConsumerRejectListsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DomainNamesInput`<sup>Optional</sup> <a name="DomainNamesInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.domainNamesInput"></a>

```go
func DomainNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnableProxyProtocolInput`<sup>Optional</sup> <a name="EnableProxyProtocolInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.enableProxyProtocolInput"></a>

```go
func EnableProxyProtocolInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NatSubnetsInput`<sup>Optional</sup> <a name="NatSubnetsInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.natSubnetsInput"></a>

```go
func NatSubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TargetServiceInput`<sup>Optional</sup> <a name="TargetServiceInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.targetServiceInput"></a>

```go
func TargetServiceInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionPreference`<sup>Required</sup> <a name="ConnectionPreference" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectionPreference"></a>

```go
func ConnectionPreference() *string
```

- *Type:* *string

---

##### `ConsumerRejectLists`<sup>Required</sup> <a name="ConsumerRejectLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerRejectLists"></a>

```go
func ConsumerRejectLists() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainNames`<sup>Required</sup> <a name="DomainNames" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.domainNames"></a>

```go
func DomainNames() *[]*string
```

- *Type:* *[]*string

---

##### `EnableProxyProtocol`<sup>Required</sup> <a name="EnableProxyProtocol" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.enableProxyProtocol"></a>

```go
func EnableProxyProtocol() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NatSubnets`<sup>Required</sup> <a name="NatSubnets" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.natSubnets"></a>

```go
func NatSubnets() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TargetService`<sup>Required</sup> <a name="TargetService" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.targetService"></a>

```go
func TargetService() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeServiceAttachmentConfig <a name="ComputeServiceAttachmentConfig" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeserviceattachment"

&computeserviceattachment.ComputeServiceAttachmentConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectionPreference: *string,
	EnableProxyProtocol: interface{},
	Name: *string,
	NatSubnets: *[]*string,
	TargetService: *string,
	ConsumerAcceptLists: interface{},
	ConsumerRejectLists: *[]*string,
	Description: *string,
	DomainNames: *[]*string,
	Id: *string,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeServiceAttachment.ComputeServiceAttachmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.connectionPreference">ConnectionPreference</a></code> | <code>*string</code> | The connection preference to use for this service attachment. Valid values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL". |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.enableProxyProtocol">EnableProxyProtocol</a></code> | <code>interface{}</code> | If true, enable the proxy protocol which is for supplying client TCP/IP address data in TCP connections that traverse proxies on their way to destination servers. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.natSubnets">NatSubnets</a></code> | <code>*[]*string</code> | An array of subnets that is provided for NAT in this service attachment. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.targetService">TargetService</a></code> | <code>*string</code> | The URL of a forwarding rule that represents the service identified by this service attachment. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.consumerAcceptLists">ConsumerAcceptLists</a></code> | <code>interface{}</code> | consumer_accept_lists block. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.consumerRejectLists">ConsumerRejectLists</a></code> | <code>*[]*string</code> | An array of projects that are not allowed to connect to this service attachment. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.domainNames">DomainNames</a></code> | <code>*[]*string</code> | If specified, the domain name will be used during the integration between the PSC connected endpoints and the Cloud DNS. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment#id ComputeServiceAttachment#id}. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment#project ComputeServiceAttachment#project}. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.region">Region</a></code> | <code>*string</code> | URL of the region where the resource resides. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts">ComputeServiceAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionPreference`<sup>Required</sup> <a name="ConnectionPreference" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.connectionPreference"></a>

```go
ConnectionPreference *string
```

- *Type:* *string

The connection preference to use for this service attachment. Valid values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment#connection_preference ComputeServiceAttachment#connection_preference}

---

##### `EnableProxyProtocol`<sup>Required</sup> <a name="EnableProxyProtocol" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.enableProxyProtocol"></a>

```go
EnableProxyProtocol interface{}
```

- *Type:* interface{}

If true, enable the proxy protocol which is for supplying client TCP/IP address data in TCP connections that traverse proxies on their way to destination servers.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment#enable_proxy_protocol ComputeServiceAttachment#enable_proxy_protocol}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment#name ComputeServiceAttachment#name}

---

##### `NatSubnets`<sup>Required</sup> <a name="NatSubnets" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.natSubnets"></a>

```go
NatSubnets *[]*string
```

- *Type:* *[]*string

An array of subnets that is provided for NAT in this service attachment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment#nat_subnets ComputeServiceAttachment#nat_subnets}

---

##### `TargetService`<sup>Required</sup> <a name="TargetService" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.targetService"></a>

```go
TargetService *string
```

- *Type:* *string

The URL of a forwarding rule that represents the service identified by this service attachment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment#target_service ComputeServiceAttachment#target_service}

---

##### `ConsumerAcceptLists`<sup>Optional</sup> <a name="ConsumerAcceptLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.consumerAcceptLists"></a>

```go
ConsumerAcceptLists interface{}
```

- *Type:* interface{}

consumer_accept_lists block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment#consumer_accept_lists ComputeServiceAttachment#consumer_accept_lists}

---

##### `ConsumerRejectLists`<sup>Optional</sup> <a name="ConsumerRejectLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.consumerRejectLists"></a>

```go
ConsumerRejectLists *[]*string
```

- *Type:* *[]*string

An array of projects that are not allowed to connect to this service attachment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment#consumer_reject_lists ComputeServiceAttachment#consumer_reject_lists}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment#description ComputeServiceAttachment#description}

---

##### `DomainNames`<sup>Optional</sup> <a name="DomainNames" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.domainNames"></a>

```go
DomainNames *[]*string
```

- *Type:* *[]*string

If specified, the domain name will be used during the integration between the PSC connected endpoints and the Cloud DNS.

For example, this is a
valid domain name: "p.mycompany.com.". Current max number of domain names
supported is 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment#domain_names ComputeServiceAttachment#domain_names}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment#id ComputeServiceAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment#project ComputeServiceAttachment#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

URL of the region where the resource resides.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment#region ComputeServiceAttachment#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.timeouts"></a>

```go
Timeouts ComputeServiceAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts">ComputeServiceAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment#timeouts ComputeServiceAttachment#timeouts}

---

### ComputeServiceAttachmentConnectedEndpoints <a name="ComputeServiceAttachmentConnectedEndpoints" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeserviceattachment"

&computeserviceattachment.ComputeServiceAttachmentConnectedEndpoints {

}
```


### ComputeServiceAttachmentConsumerAcceptLists <a name="ComputeServiceAttachmentConsumerAcceptLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeserviceattachment"

&computeserviceattachment.ComputeServiceAttachmentConsumerAcceptLists {
	ConnectionLimit: *f64,
	ProjectIdOrNum: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.connectionLimit">ConnectionLimit</a></code> | <code>*f64</code> | The number of consumer forwarding rules the consumer project can create. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.projectIdOrNum">ProjectIdOrNum</a></code> | <code>*string</code> | A project that is allowed to connect to this service attachment. |

---

##### `ConnectionLimit`<sup>Required</sup> <a name="ConnectionLimit" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.connectionLimit"></a>

```go
ConnectionLimit *f64
```

- *Type:* *f64

The number of consumer forwarding rules the consumer project can create.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment#connection_limit ComputeServiceAttachment#connection_limit}

---

##### `ProjectIdOrNum`<sup>Required</sup> <a name="ProjectIdOrNum" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.projectIdOrNum"></a>

```go
ProjectIdOrNum *string
```

- *Type:* *string

A project that is allowed to connect to this service attachment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment#project_id_or_num ComputeServiceAttachment#project_id_or_num}

---

### ComputeServiceAttachmentTimeouts <a name="ComputeServiceAttachmentTimeouts" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeserviceattachment"

&computeserviceattachment.ComputeServiceAttachmentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment#create ComputeServiceAttachment#create}. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment#delete ComputeServiceAttachment#delete}. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment#update ComputeServiceAttachment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment#create ComputeServiceAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment#delete ComputeServiceAttachment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_service_attachment#update ComputeServiceAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeServiceAttachmentConnectedEndpointsList <a name="ComputeServiceAttachmentConnectedEndpointsList" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeserviceattachment"

computeserviceattachment.NewComputeServiceAttachmentConnectedEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeServiceAttachmentConnectedEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.get"></a>

```go
func Get(index *f64) ComputeServiceAttachmentConnectedEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeServiceAttachmentConnectedEndpointsOutputReference <a name="ComputeServiceAttachmentConnectedEndpointsOutputReference" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeserviceattachment"

computeserviceattachment.NewComputeServiceAttachmentConnectedEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeServiceAttachmentConnectedEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpoints">ComputeServiceAttachmentConnectedEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeServiceAttachmentConnectedEndpoints
```

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpoints">ComputeServiceAttachmentConnectedEndpoints</a>

---


### ComputeServiceAttachmentConsumerAcceptListsList <a name="ComputeServiceAttachmentConsumerAcceptListsList" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeserviceattachment"

computeserviceattachment.NewComputeServiceAttachmentConsumerAcceptListsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeServiceAttachmentConsumerAcceptListsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.get"></a>

```go
func Get(index *f64) ComputeServiceAttachmentConsumerAcceptListsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeServiceAttachmentConsumerAcceptListsOutputReference <a name="ComputeServiceAttachmentConsumerAcceptListsOutputReference" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeserviceattachment"

computeserviceattachment.NewComputeServiceAttachmentConsumerAcceptListsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeServiceAttachmentConsumerAcceptListsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimitInput">ConnectionLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNumInput">ProjectIdOrNumInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimit">ConnectionLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNum">ProjectIdOrNum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionLimitInput`<sup>Optional</sup> <a name="ConnectionLimitInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimitInput"></a>

```go
func ConnectionLimitInput() *f64
```

- *Type:* *f64

---

##### `ProjectIdOrNumInput`<sup>Optional</sup> <a name="ProjectIdOrNumInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNumInput"></a>

```go
func ProjectIdOrNumInput() *string
```

- *Type:* *string

---

##### `ConnectionLimit`<sup>Required</sup> <a name="ConnectionLimit" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimit"></a>

```go
func ConnectionLimit() *f64
```

- *Type:* *f64

---

##### `ProjectIdOrNum`<sup>Required</sup> <a name="ProjectIdOrNum" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNum"></a>

```go
func ProjectIdOrNum() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeServiceAttachmentTimeoutsOutputReference <a name="ComputeServiceAttachmentTimeoutsOutputReference" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeserviceattachment"

computeserviceattachment.NewComputeServiceAttachmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeServiceAttachmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



