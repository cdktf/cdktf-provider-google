# `google_gke_hub_feature`

Refer to the Terraform Registory for docs: [`google_gke_hub_feature`](https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/gke_hub_feature).

# `gkeHubFeature` Submodule <a name="`gkeHubFeature` Submodule" id="@cdktf/provider-google.gkeHubFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeHubFeature <a name="GkeHubFeature" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/gke_hub_feature google_gke_hub_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

new gkeHubFeature.GkeHubFeature(scope: Construct, id: string, config: GkeHubFeatureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig">GkeHubFeatureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig">GkeHubFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetSpec">resetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putSpec"></a>

```typescript
public putSpec(value: GkeHubFeatureSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec">GkeHubFeatureSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putTimeouts"></a>

```typescript
public putTimeouts(value: GkeHubFeatureTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts">GkeHubFeatureTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSpec` <a name="resetSpec" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetSpec"></a>

```typescript
public resetSpec(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isConstruct"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

gkeHubFeature.GkeHubFeature.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isTerraformElement"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

gkeHubFeature.GkeHubFeature.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isTerraformResource"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

gkeHubFeature.GkeHubFeature.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.resourceState">resourceState</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList">GkeHubFeatureResourceStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference">GkeHubFeatureSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.state">state</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList">GkeHubFeatureStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference">GkeHubFeatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec">GkeHubFeatureSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts">GkeHubFeatureTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `resourceState`<sup>Required</sup> <a name="resourceState" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.resourceState"></a>

```typescript
public readonly resourceState: GkeHubFeatureResourceStateList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList">GkeHubFeatureResourceStateList</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.spec"></a>

```typescript
public readonly spec: GkeHubFeatureSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference">GkeHubFeatureSpecOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.state"></a>

```typescript
public readonly state: GkeHubFeatureStateList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList">GkeHubFeatureStateList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.timeouts"></a>

```typescript
public readonly timeouts: GkeHubFeatureTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference">GkeHubFeatureTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.specInput"></a>

```typescript
public readonly specInput: GkeHubFeatureSpec;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec">GkeHubFeatureSpec</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GkeHubFeatureTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts">GkeHubFeatureTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeHubFeatureConfig <a name="GkeHubFeatureConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.Initializer"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

const gkeHubFeatureConfig: gkeHubFeature.GkeHubFeatureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/gke_hub_feature#id GkeHubFeature#id}. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | GCP labels for this Feature. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.name">name</a></code> | <code>string</code> | The full, unique name of this Feature resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/gke_hub_feature#project GkeHubFeature#project}. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec">GkeHubFeatureSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts">GkeHubFeatureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/gke_hub_feature#location GkeHubFeature#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/gke_hub_feature#id GkeHubFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

GCP labels for this Feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/gke_hub_feature#labels GkeHubFeature#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The full, unique name of this Feature resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/gke_hub_feature#name GkeHubFeature#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/gke_hub_feature#project GkeHubFeature#project}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.spec"></a>

```typescript
public readonly spec: GkeHubFeatureSpec;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec">GkeHubFeatureSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/gke_hub_feature#spec GkeHubFeature#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GkeHubFeatureTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts">GkeHubFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/gke_hub_feature#timeouts GkeHubFeature#timeouts}

---

### GkeHubFeatureResourceState <a name="GkeHubFeatureResourceState" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceState.Initializer"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

const gkeHubFeatureResourceState: gkeHubFeature.GkeHubFeatureResourceState = { ... }
```


### GkeHubFeatureSpec <a name="GkeHubFeatureSpec" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec.Initializer"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

const gkeHubFeatureSpec: gkeHubFeature.GkeHubFeatureSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec.property.fleetobservability">fleetobservability</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability">GkeHubFeatureSpecFleetobservability</a></code> | fleetobservability block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec.property.multiclusteringress">multiclusteringress</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress">GkeHubFeatureSpecMulticlusteringress</a></code> | multiclusteringress block. |

---

##### `fleetobservability`<sup>Optional</sup> <a name="fleetobservability" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec.property.fleetobservability"></a>

```typescript
public readonly fleetobservability: GkeHubFeatureSpecFleetobservability;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability">GkeHubFeatureSpecFleetobservability</a>

fleetobservability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/gke_hub_feature#fleetobservability GkeHubFeature#fleetobservability}

---

##### `multiclusteringress`<sup>Optional</sup> <a name="multiclusteringress" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec.property.multiclusteringress"></a>

```typescript
public readonly multiclusteringress: GkeHubFeatureSpecMulticlusteringress;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress">GkeHubFeatureSpecMulticlusteringress</a>

multiclusteringress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/gke_hub_feature#multiclusteringress GkeHubFeature#multiclusteringress}

---

### GkeHubFeatureSpecFleetobservability <a name="GkeHubFeatureSpecFleetobservability" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability.Initializer"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

const gkeHubFeatureSpecFleetobservability: gkeHubFeature.GkeHubFeatureSpecFleetobservability = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfig</a></code> | logging_config block. |

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: GkeHubFeatureSpecFleetobservabilityLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/gke_hub_feature#logging_config GkeHubFeature#logging_config}

---

### GkeHubFeatureSpecFleetobservabilityLoggingConfig <a name="GkeHubFeatureSpecFleetobservabilityLoggingConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig.Initializer"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

const gkeHubFeatureSpecFleetobservabilityLoggingConfig: gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig.property.defaultConfig">defaultConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a></code> | default_config block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig.property.fleetScopeLogsConfig">fleetScopeLogsConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a></code> | fleet_scope_logs_config block. |

---

##### `defaultConfig`<sup>Optional</sup> <a name="defaultConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig.property.defaultConfig"></a>

```typescript
public readonly defaultConfig: GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a>

default_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/gke_hub_feature#default_config GkeHubFeature#default_config}

---

##### `fleetScopeLogsConfig`<sup>Optional</sup> <a name="fleetScopeLogsConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig.property.fleetScopeLogsConfig"></a>

```typescript
public readonly fleetScopeLogsConfig: GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a>

fleet_scope_logs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/gke_hub_feature#fleet_scope_logs_config GkeHubFeature#fleet_scope_logs_config}

---

### GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig <a name="GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig.Initializer"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

const gkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig: gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig.property.mode">mode</a></code> | <code>string</code> | Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"]. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/gke_hub_feature#mode GkeHubFeature#mode}

---

### GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig <a name="GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig.Initializer"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

const gkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig: gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig.property.mode">mode</a></code> | <code>string</code> | Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"]. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/gke_hub_feature#mode GkeHubFeature#mode}

---

### GkeHubFeatureSpecMulticlusteringress <a name="GkeHubFeatureSpecMulticlusteringress" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress.Initializer"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

const gkeHubFeatureSpecMulticlusteringress: gkeHubFeature.GkeHubFeatureSpecMulticlusteringress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress.property.configMembership">configMembership</a></code> | <code>string</code> | Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: 'projects/foo-proj/locations/global/memberships/bar'. |

---

##### `configMembership`<sup>Required</sup> <a name="configMembership" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress.property.configMembership"></a>

```typescript
public readonly configMembership: string;
```

- *Type:* string

Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: 'projects/foo-proj/locations/global/memberships/bar'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/gke_hub_feature#config_membership GkeHubFeature#config_membership}

---

### GkeHubFeatureState <a name="GkeHubFeatureState" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureState.Initializer"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

const gkeHubFeatureState: gkeHubFeature.GkeHubFeatureState = { ... }
```


### GkeHubFeatureStateState <a name="GkeHubFeatureStateState" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateState.Initializer"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

const gkeHubFeatureStateState: gkeHubFeature.GkeHubFeatureStateState = { ... }
```


### GkeHubFeatureTimeouts <a name="GkeHubFeatureTimeouts" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts.Initializer"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

const gkeHubFeatureTimeouts: gkeHubFeature.GkeHubFeatureTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/gke_hub_feature#create GkeHubFeature#create}. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/gke_hub_feature#delete GkeHubFeature#delete}. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/gke_hub_feature#update GkeHubFeature#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/gke_hub_feature#create GkeHubFeature#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/gke_hub_feature#delete GkeHubFeature#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/gke_hub_feature#update GkeHubFeature#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeHubFeatureResourceStateList <a name="GkeHubFeatureResourceStateList" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.Initializer"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

new gkeHubFeature.GkeHubFeatureResourceStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.get"></a>

```typescript
public get(index: number): GkeHubFeatureResourceStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GkeHubFeatureResourceStateOutputReference <a name="GkeHubFeatureResourceStateOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

new gkeHubFeature.GkeHubFeatureResourceStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.hasResources">hasResources</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceState">GkeHubFeatureResourceState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hasResources`<sup>Required</sup> <a name="hasResources" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.hasResources"></a>

```typescript
public readonly hasResources: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFeatureResourceState;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceState">GkeHubFeatureResourceState</a>

---


### GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference <a name="GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.Initializer"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

new gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a>

---


### GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference <a name="GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.Initializer"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

new gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a>

---


### GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference <a name="GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.Initializer"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

new gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putDefaultConfig">putDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putFleetScopeLogsConfig">putFleetScopeLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resetDefaultConfig">resetDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resetFleetScopeLogsConfig">resetFleetScopeLogsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultConfig` <a name="putDefaultConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putDefaultConfig"></a>

```typescript
public putDefaultConfig(value: GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putDefaultConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a>

---

##### `putFleetScopeLogsConfig` <a name="putFleetScopeLogsConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putFleetScopeLogsConfig"></a>

```typescript
public putFleetScopeLogsConfig(value: GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putFleetScopeLogsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a>

---

##### `resetDefaultConfig` <a name="resetDefaultConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resetDefaultConfig"></a>

```typescript
public resetDefaultConfig(): void
```

##### `resetFleetScopeLogsConfig` <a name="resetFleetScopeLogsConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resetFleetScopeLogsConfig"></a>

```typescript
public resetFleetScopeLogsConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.defaultConfig">defaultConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fleetScopeLogsConfig">fleetScopeLogsConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.defaultConfigInput">defaultConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fleetScopeLogsConfigInput">fleetScopeLogsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultConfig`<sup>Required</sup> <a name="defaultConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.defaultConfig"></a>

```typescript
public readonly defaultConfig: GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference</a>

---

##### `fleetScopeLogsConfig`<sup>Required</sup> <a name="fleetScopeLogsConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fleetScopeLogsConfig"></a>

```typescript
public readonly fleetScopeLogsConfig: GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference</a>

---

##### `defaultConfigInput`<sup>Optional</sup> <a name="defaultConfigInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.defaultConfigInput"></a>

```typescript
public readonly defaultConfigInput: GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a>

---

##### `fleetScopeLogsConfigInput`<sup>Optional</sup> <a name="fleetScopeLogsConfigInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fleetScopeLogsConfigInput"></a>

```typescript
public readonly fleetScopeLogsConfigInput: GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFeatureSpecFleetobservabilityLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfig</a>

---


### GkeHubFeatureSpecFleetobservabilityOutputReference <a name="GkeHubFeatureSpecFleetobservabilityOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.Initializer"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

new gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.putLoggingConfig"></a>

```typescript
public putLoggingConfig(value: GkeHubFeatureSpecFleetobservabilityLoggingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfig</a>

---

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.resetLoggingConfig"></a>

```typescript
public resetLoggingConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference">GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.loggingConfigInput">loggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability">GkeHubFeatureSpecFleetobservability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference">GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference</a>

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.loggingConfigInput"></a>

```typescript
public readonly loggingConfigInput: GkeHubFeatureSpecFleetobservabilityLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFeatureSpecFleetobservability;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability">GkeHubFeatureSpecFleetobservability</a>

---


### GkeHubFeatureSpecMulticlusteringressOutputReference <a name="GkeHubFeatureSpecMulticlusteringressOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.Initializer"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

new gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.configMembershipInput">configMembershipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.configMembership">configMembership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress">GkeHubFeatureSpecMulticlusteringress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configMembershipInput`<sup>Optional</sup> <a name="configMembershipInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.configMembershipInput"></a>

```typescript
public readonly configMembershipInput: string;
```

- *Type:* string

---

##### `configMembership`<sup>Required</sup> <a name="configMembership" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.configMembership"></a>

```typescript
public readonly configMembership: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFeatureSpecMulticlusteringress;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress">GkeHubFeatureSpecMulticlusteringress</a>

---


### GkeHubFeatureSpecOutputReference <a name="GkeHubFeatureSpecOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.Initializer"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

new gkeHubFeature.GkeHubFeatureSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.putFleetobservability">putFleetobservability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.putMulticlusteringress">putMulticlusteringress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.resetFleetobservability">resetFleetobservability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.resetMulticlusteringress">resetMulticlusteringress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFleetobservability` <a name="putFleetobservability" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.putFleetobservability"></a>

```typescript
public putFleetobservability(value: GkeHubFeatureSpecFleetobservability): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.putFleetobservability.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability">GkeHubFeatureSpecFleetobservability</a>

---

##### `putMulticlusteringress` <a name="putMulticlusteringress" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.putMulticlusteringress"></a>

```typescript
public putMulticlusteringress(value: GkeHubFeatureSpecMulticlusteringress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.putMulticlusteringress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress">GkeHubFeatureSpecMulticlusteringress</a>

---

##### `resetFleetobservability` <a name="resetFleetobservability" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.resetFleetobservability"></a>

```typescript
public resetFleetobservability(): void
```

##### `resetMulticlusteringress` <a name="resetMulticlusteringress" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.resetMulticlusteringress"></a>

```typescript
public resetMulticlusteringress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.fleetobservability">fleetobservability</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference">GkeHubFeatureSpecFleetobservabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.multiclusteringress">multiclusteringress</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference">GkeHubFeatureSpecMulticlusteringressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.fleetobservabilityInput">fleetobservabilityInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability">GkeHubFeatureSpecFleetobservability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.multiclusteringressInput">multiclusteringressInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress">GkeHubFeatureSpecMulticlusteringress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec">GkeHubFeatureSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fleetobservability`<sup>Required</sup> <a name="fleetobservability" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.fleetobservability"></a>

```typescript
public readonly fleetobservability: GkeHubFeatureSpecFleetobservabilityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference">GkeHubFeatureSpecFleetobservabilityOutputReference</a>

---

##### `multiclusteringress`<sup>Required</sup> <a name="multiclusteringress" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.multiclusteringress"></a>

```typescript
public readonly multiclusteringress: GkeHubFeatureSpecMulticlusteringressOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference">GkeHubFeatureSpecMulticlusteringressOutputReference</a>

---

##### `fleetobservabilityInput`<sup>Optional</sup> <a name="fleetobservabilityInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.fleetobservabilityInput"></a>

```typescript
public readonly fleetobservabilityInput: GkeHubFeatureSpecFleetobservability;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability">GkeHubFeatureSpecFleetobservability</a>

---

##### `multiclusteringressInput`<sup>Optional</sup> <a name="multiclusteringressInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.multiclusteringressInput"></a>

```typescript
public readonly multiclusteringressInput: GkeHubFeatureSpecMulticlusteringress;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress">GkeHubFeatureSpecMulticlusteringress</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFeatureSpec;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec">GkeHubFeatureSpec</a>

---


### GkeHubFeatureStateList <a name="GkeHubFeatureStateList" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.Initializer"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

new gkeHubFeature.GkeHubFeatureStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.get"></a>

```typescript
public get(index: number): GkeHubFeatureStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GkeHubFeatureStateOutputReference <a name="GkeHubFeatureStateOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

new gkeHubFeature.GkeHubFeatureStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.property.state">state</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList">GkeHubFeatureStateStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureState">GkeHubFeatureState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.property.state"></a>

```typescript
public readonly state: GkeHubFeatureStateStateList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList">GkeHubFeatureStateStateList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFeatureState;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureState">GkeHubFeatureState</a>

---


### GkeHubFeatureStateStateList <a name="GkeHubFeatureStateStateList" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.Initializer"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

new gkeHubFeature.GkeHubFeatureStateStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.get"></a>

```typescript
public get(index: number): GkeHubFeatureStateStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GkeHubFeatureStateStateOutputReference <a name="GkeHubFeatureStateStateOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

new gkeHubFeature.GkeHubFeatureStateStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateState">GkeHubFeatureStateState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFeatureStateState;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateState">GkeHubFeatureStateState</a>

---


### GkeHubFeatureTimeoutsOutputReference <a name="GkeHubFeatureTimeoutsOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.Initializer"></a>

```typescript
import { gkeHubFeature } from '@cdktf/provider-google'

new gkeHubFeature.GkeHubFeatureTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts">GkeHubFeatureTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeHubFeatureTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts">GkeHubFeatureTimeouts</a>

---



