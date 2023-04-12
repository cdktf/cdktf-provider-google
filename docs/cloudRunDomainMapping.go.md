# `cloudRunDomainMapping` Submodule <a name="`cloudRunDomainMapping` Submodule" id="@cdktf/provider-google.cloudRunDomainMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudRunDomainMapping <a name="CloudRunDomainMapping" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/cloud_run_domain_mapping google_cloud_run_domain_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrundomainmapping"

cloudrundomainmapping.NewCloudRunDomainMapping(scope Construct, id *string, config CloudRunDomainMappingConfig) CloudRunDomainMapping
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig">CloudRunDomainMappingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig">CloudRunDomainMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putMetadata"></a>

```go
func PutMetadata(value CloudRunDomainMappingMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata">CloudRunDomainMappingMetadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putSpec"></a>

```go
func PutSpec(value CloudRunDomainMappingSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec">CloudRunDomainMappingSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putTimeouts"></a>

```go
func PutTimeouts(value CloudRunDomainMappingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts">CloudRunDomainMappingTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrundomainmapping"

cloudrundomainmapping.CloudRunDomainMapping_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrundomainmapping"

cloudrundomainmapping.CloudRunDomainMapping_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrundomainmapping"

cloudrundomainmapping.CloudRunDomainMapping_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference">CloudRunDomainMappingMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference">CloudRunDomainMappingSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList">CloudRunDomainMappingStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference">CloudRunDomainMappingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata">CloudRunDomainMappingMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec">CloudRunDomainMappingSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.metadata"></a>

```go
func Metadata() CloudRunDomainMappingMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference">CloudRunDomainMappingMetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.spec"></a>

```go
func Spec() CloudRunDomainMappingSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference">CloudRunDomainMappingSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.status"></a>

```go
func Status() CloudRunDomainMappingStatusList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList">CloudRunDomainMappingStatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.timeouts"></a>

```go
func Timeouts() CloudRunDomainMappingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference">CloudRunDomainMappingTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.metadataInput"></a>

```go
func MetadataInput() CloudRunDomainMappingMetadata
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata">CloudRunDomainMappingMetadata</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.specInput"></a>

```go
func SpecInput() CloudRunDomainMappingSpec
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec">CloudRunDomainMappingSpec</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMapping.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudRunDomainMappingConfig <a name="CloudRunDomainMappingConfig" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrundomainmapping"

&cloudrundomainmapping.CloudRunDomainMappingConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Metadata: github.com/cdktf/cdktf-provider-google-go/google.cloudRunDomainMapping.CloudRunDomainMappingMetadata,
	Name: *string,
	Spec: github.com/cdktf/cdktf-provider-google-go/google.cloudRunDomainMapping.CloudRunDomainMappingSpec,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.location">Location</a></code> | <code>*string</code> | The location of the cloud run instance. eg us-central1. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata">CloudRunDomainMappingMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.name">Name</a></code> | <code>*string</code> | Name should be a [verified](https://support.google.com/webmasters/answer/9008080) domain. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec">CloudRunDomainMappingSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_domain_mapping#id CloudRunDomainMapping#id}. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_domain_mapping#project CloudRunDomainMapping#project}. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts">CloudRunDomainMappingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the cloud run instance. eg us-central1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_domain_mapping#location CloudRunDomainMapping#location}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.metadata"></a>

```go
Metadata CloudRunDomainMappingMetadata
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata">CloudRunDomainMappingMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_domain_mapping#metadata CloudRunDomainMapping#metadata}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name should be a [verified](https://support.google.com/webmasters/answer/9008080) domain.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_domain_mapping#name CloudRunDomainMapping#name}

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.spec"></a>

```go
Spec CloudRunDomainMappingSpec
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec">CloudRunDomainMappingSpec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_domain_mapping#spec CloudRunDomainMapping#spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_domain_mapping#id CloudRunDomainMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_domain_mapping#project CloudRunDomainMapping#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingConfig.property.timeouts"></a>

```go
Timeouts CloudRunDomainMappingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts">CloudRunDomainMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_domain_mapping#timeouts CloudRunDomainMapping#timeouts}

---

### CloudRunDomainMappingMetadata <a name="CloudRunDomainMappingMetadata" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrundomainmapping"

&cloudrundomainmapping.CloudRunDomainMappingMetadata {
	Namespace: *string,
	Annotations: *map[string]*string,
	Labels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata.property.namespace">Namespace</a></code> | <code>*string</code> | In Cloud Run the namespace must be equal to either the project ID or project number. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Annotations is a key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Map of string keys and values that can be used to organize and categorize (scope and select) objects. |

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

In Cloud Run the namespace must be equal to either the project ID or project number.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_domain_mapping#namespace CloudRunDomainMapping#namespace}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Annotations is a key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

More
info: http://kubernetes.io/docs/user-guide/annotations

*Note**: The Cloud Run API may add additional annotations that were not provided in your config.
If terraform plan shows a diff where a server-side annotation is added, you can add it to your config
or apply the lifecycle.ignore_changes rule to the metadata.0.annotations field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_domain_mapping#annotations CloudRunDomainMapping#annotations}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Map of string keys and values that can be used to organize and categorize (scope and select) objects.

May match selectors of replication controllers
and routes.
More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_domain_mapping#labels CloudRunDomainMapping#labels}

---

### CloudRunDomainMappingSpec <a name="CloudRunDomainMappingSpec" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrundomainmapping"

&cloudrundomainmapping.CloudRunDomainMappingSpec {
	RouteName: *string,
	CertificateMode: *string,
	ForceOverride: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec.property.routeName">RouteName</a></code> | <code>*string</code> | The name of the Cloud Run Service that this DomainMapping applies to. The route must exist. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec.property.certificateMode">CertificateMode</a></code> | <code>*string</code> | The mode of the certificate. Default value: "AUTOMATIC" Possible values: ["NONE", "AUTOMATIC"]. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec.property.forceOverride">ForceOverride</a></code> | <code>interface{}</code> | If set, the mapping will override any mapping set before this spec was set. |

---

##### `RouteName`<sup>Required</sup> <a name="RouteName" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec.property.routeName"></a>

```go
RouteName *string
```

- *Type:* *string

The name of the Cloud Run Service that this DomainMapping applies to. The route must exist.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_domain_mapping#route_name CloudRunDomainMapping#route_name}

---

##### `CertificateMode`<sup>Optional</sup> <a name="CertificateMode" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec.property.certificateMode"></a>

```go
CertificateMode *string
```

- *Type:* *string

The mode of the certificate. Default value: "AUTOMATIC" Possible values: ["NONE", "AUTOMATIC"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_domain_mapping#certificate_mode CloudRunDomainMapping#certificate_mode}

---

##### `ForceOverride`<sup>Optional</sup> <a name="ForceOverride" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec.property.forceOverride"></a>

```go
ForceOverride interface{}
```

- *Type:* interface{}

If set, the mapping will override any mapping set before this spec was set.

It is recommended that the user leaves this empty to receive an error
warning about a potential conflict and only set it once the respective UI
has given such a warning.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_domain_mapping#force_override CloudRunDomainMapping#force_override}

---

### CloudRunDomainMappingStatus <a name="CloudRunDomainMappingStatus" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrundomainmapping"

&cloudrundomainmapping.CloudRunDomainMappingStatus {

}
```


### CloudRunDomainMappingStatusConditions <a name="CloudRunDomainMappingStatusConditions" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrundomainmapping"

&cloudrundomainmapping.CloudRunDomainMappingStatusConditions {

}
```


### CloudRunDomainMappingStatusResourceRecords <a name="CloudRunDomainMappingStatusResourceRecords" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecords.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrundomainmapping"

&cloudrundomainmapping.CloudRunDomainMappingStatusResourceRecords {

}
```


### CloudRunDomainMappingTimeouts <a name="CloudRunDomainMappingTimeouts" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrundomainmapping"

&cloudrundomainmapping.CloudRunDomainMappingTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_domain_mapping#create CloudRunDomainMapping#create}. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_domain_mapping#delete CloudRunDomainMapping#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_domain_mapping#create CloudRunDomainMapping#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_domain_mapping#delete CloudRunDomainMapping#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudRunDomainMappingMetadataOutputReference <a name="CloudRunDomainMappingMetadataOutputReference" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrundomainmapping"

cloudrundomainmapping.NewCloudRunDomainMappingMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunDomainMappingMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.resetLabels"></a>

```go
func ResetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata">CloudRunDomainMappingMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunDomainMappingMetadata
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingMetadata">CloudRunDomainMappingMetadata</a>

---


### CloudRunDomainMappingSpecOutputReference <a name="CloudRunDomainMappingSpecOutputReference" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrundomainmapping"

cloudrundomainmapping.NewCloudRunDomainMappingSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunDomainMappingSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.resetCertificateMode">ResetCertificateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.resetForceOverride">ResetForceOverride</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateMode` <a name="ResetCertificateMode" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.resetCertificateMode"></a>

```go
func ResetCertificateMode()
```

##### `ResetForceOverride` <a name="ResetForceOverride" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.resetForceOverride"></a>

```go
func ResetForceOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.certificateModeInput">CertificateModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.forceOverrideInput">ForceOverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.routeNameInput">RouteNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.certificateMode">CertificateMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.forceOverride">ForceOverride</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.routeName">RouteName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec">CloudRunDomainMappingSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateModeInput`<sup>Optional</sup> <a name="CertificateModeInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.certificateModeInput"></a>

```go
func CertificateModeInput() *string
```

- *Type:* *string

---

##### `ForceOverrideInput`<sup>Optional</sup> <a name="ForceOverrideInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.forceOverrideInput"></a>

```go
func ForceOverrideInput() interface{}
```

- *Type:* interface{}

---

##### `RouteNameInput`<sup>Optional</sup> <a name="RouteNameInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.routeNameInput"></a>

```go
func RouteNameInput() *string
```

- *Type:* *string

---

##### `CertificateMode`<sup>Required</sup> <a name="CertificateMode" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.certificateMode"></a>

```go
func CertificateMode() *string
```

- *Type:* *string

---

##### `ForceOverride`<sup>Required</sup> <a name="ForceOverride" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.forceOverride"></a>

```go
func ForceOverride() interface{}
```

- *Type:* interface{}

---

##### `RouteName`<sup>Required</sup> <a name="RouteName" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.routeName"></a>

```go
func RouteName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunDomainMappingSpec
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingSpec">CloudRunDomainMappingSpec</a>

---


### CloudRunDomainMappingStatusConditionsList <a name="CloudRunDomainMappingStatusConditionsList" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrundomainmapping"

cloudrundomainmapping.NewCloudRunDomainMappingStatusConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunDomainMappingStatusConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.get"></a>

```go
func Get(index *f64) CloudRunDomainMappingStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudRunDomainMappingStatusConditionsOutputReference <a name="CloudRunDomainMappingStatusConditionsOutputReference" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrundomainmapping"

cloudrundomainmapping.NewCloudRunDomainMappingStatusConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunDomainMappingStatusConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditions">CloudRunDomainMappingStatusConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunDomainMappingStatusConditions
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditions">CloudRunDomainMappingStatusConditions</a>

---


### CloudRunDomainMappingStatusList <a name="CloudRunDomainMappingStatusList" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrundomainmapping"

cloudrundomainmapping.NewCloudRunDomainMappingStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunDomainMappingStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.get"></a>

```go
func Get(index *f64) CloudRunDomainMappingStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudRunDomainMappingStatusOutputReference <a name="CloudRunDomainMappingStatusOutputReference" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrundomainmapping"

cloudrundomainmapping.NewCloudRunDomainMappingStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunDomainMappingStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList">CloudRunDomainMappingStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.mappedRouteName">MappedRouteName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.observedGeneration">ObservedGeneration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.resourceRecords">ResourceRecords</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList">CloudRunDomainMappingStatusResourceRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatus">CloudRunDomainMappingStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.conditions"></a>

```go
func Conditions() CloudRunDomainMappingStatusConditionsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusConditionsList">CloudRunDomainMappingStatusConditionsList</a>

---

##### `MappedRouteName`<sup>Required</sup> <a name="MappedRouteName" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.mappedRouteName"></a>

```go
func MappedRouteName() *string
```

- *Type:* *string

---

##### `ObservedGeneration`<sup>Required</sup> <a name="ObservedGeneration" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.observedGeneration"></a>

```go
func ObservedGeneration() *f64
```

- *Type:* *f64

---

##### `ResourceRecords`<sup>Required</sup> <a name="ResourceRecords" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.resourceRecords"></a>

```go
func ResourceRecords() CloudRunDomainMappingStatusResourceRecordsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList">CloudRunDomainMappingStatusResourceRecordsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunDomainMappingStatus
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatus">CloudRunDomainMappingStatus</a>

---


### CloudRunDomainMappingStatusResourceRecordsList <a name="CloudRunDomainMappingStatusResourceRecordsList" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrundomainmapping"

cloudrundomainmapping.NewCloudRunDomainMappingStatusResourceRecordsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunDomainMappingStatusResourceRecordsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.get"></a>

```go
func Get(index *f64) CloudRunDomainMappingStatusResourceRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudRunDomainMappingStatusResourceRecordsOutputReference <a name="CloudRunDomainMappingStatusResourceRecordsOutputReference" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrundomainmapping"

cloudrundomainmapping.NewCloudRunDomainMappingStatusResourceRecordsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunDomainMappingStatusResourceRecordsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.rrdata">Rrdata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecords">CloudRunDomainMappingStatusResourceRecords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Rrdata`<sup>Required</sup> <a name="Rrdata" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.rrdata"></a>

```go
func Rrdata() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecordsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunDomainMappingStatusResourceRecords
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingStatusResourceRecords">CloudRunDomainMappingStatusResourceRecords</a>

---


### CloudRunDomainMappingTimeoutsOutputReference <a name="CloudRunDomainMappingTimeoutsOutputReference" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrundomainmapping"

cloudrundomainmapping.NewCloudRunDomainMappingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunDomainMappingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunDomainMapping.CloudRunDomainMappingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



