# `vertexAiIndex` Submodule <a name="`vertexAiIndex` Submodule" id="@cdktf/provider-google.vertexAiIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiIndex <a name="VertexAiIndex" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index google_vertex_ai_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer"></a>

```typescript
import { vertexAiIndex } from '@cdktf/provider-google'

new vertexAiIndex.VertexAiIndex(scope: Construct, id: string, config: VertexAiIndexConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig">VertexAiIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig">VertexAiIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetIndexUpdateMethod">resetIndexUpdateMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.putMetadata"></a>

```typescript
public putMetadata(value: VertexAiIndexMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata">VertexAiIndexMetadata</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.putTimeouts"></a>

```typescript
public putTimeouts(value: VertexAiIndexTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts">VertexAiIndexTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIndexUpdateMethod` <a name="resetIndexUpdateMethod" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetIndexUpdateMethod"></a>

```typescript
public resetIndexUpdateMethod(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isConstruct"></a>

```typescript
import { vertexAiIndex } from '@cdktf/provider-google'

vertexAiIndex.VertexAiIndex.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isTerraformElement"></a>

```typescript
import { vertexAiIndex } from '@cdktf/provider-google'

vertexAiIndex.VertexAiIndex.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isTerraformResource"></a>

```typescript
import { vertexAiIndex } from '@cdktf/provider-google'

vertexAiIndex.VertexAiIndex.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.deployedIndexes">deployedIndexes</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList">VertexAiIndexDeployedIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.indexStats">indexStats</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList">VertexAiIndexIndexStatsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference">VertexAiIndexMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.metadataSchemaUri">metadataSchemaUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference">VertexAiIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.indexUpdateMethodInput">indexUpdateMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata">VertexAiIndexMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts">VertexAiIndexTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.indexUpdateMethod">indexUpdateMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deployedIndexes`<sup>Required</sup> <a name="deployedIndexes" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.deployedIndexes"></a>

```typescript
public readonly deployedIndexes: VertexAiIndexDeployedIndexesList;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList">VertexAiIndexDeployedIndexesList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `indexStats`<sup>Required</sup> <a name="indexStats" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.indexStats"></a>

```typescript
public readonly indexStats: VertexAiIndexIndexStatsList;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList">VertexAiIndexIndexStatsList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.metadata"></a>

```typescript
public readonly metadata: VertexAiIndexMetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference">VertexAiIndexMetadataOutputReference</a>

---

##### `metadataSchemaUri`<sup>Required</sup> <a name="metadataSchemaUri" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.metadataSchemaUri"></a>

```typescript
public readonly metadataSchemaUri: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.timeouts"></a>

```typescript
public readonly timeouts: VertexAiIndexTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference">VertexAiIndexTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexUpdateMethodInput`<sup>Optional</sup> <a name="indexUpdateMethodInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.indexUpdateMethodInput"></a>

```typescript
public readonly indexUpdateMethodInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.metadataInput"></a>

```typescript
public readonly metadataInput: VertexAiIndexMetadata;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata">VertexAiIndexMetadata</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: VertexAiIndexTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts">VertexAiIndexTimeouts</a> | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `indexUpdateMethod`<sup>Required</sup> <a name="indexUpdateMethod" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.indexUpdateMethod"></a>

```typescript
public readonly indexUpdateMethod: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndex.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiIndexConfig <a name="VertexAiIndexConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.Initializer"></a>

```typescript
import { vertexAiIndex } from '@cdktf/provider-google'

const vertexAiIndexConfig: vertexAiIndex.VertexAiIndexConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the Index. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.description">description</a></code> | <code>string</code> | The description of the Index. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#id VertexAiIndex#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.indexUpdateMethod">indexUpdateMethod</a></code> | <code>string</code> | The update method to use with this Index. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels with user-defined metadata to organize your Indexes. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata">VertexAiIndexMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#project VertexAiIndex#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.region">region</a></code> | <code>string</code> | The region of the index. eg us-central1. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts">VertexAiIndexTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the Index.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#display_name VertexAiIndex#display_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the Index.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#description VertexAiIndex#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#id VertexAiIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indexUpdateMethod`<sup>Optional</sup> <a name="indexUpdateMethod" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.indexUpdateMethod"></a>

```typescript
public readonly indexUpdateMethod: string;
```

- *Type:* string

The update method to use with this Index.

The value must be the followings. If not set, BATCH_UPDATE will be used by default.
BATCH_UPDATE: user can call indexes.patch with files on Cloud Storage of datapoints to update.
STREAM_UPDATE: user can call indexes.upsertDatapoints/DeleteDatapoints to update the Index and the updates will be applied in corresponding DeployedIndexes in nearly real-time.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#index_update_method VertexAiIndex#index_update_method}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels with user-defined metadata to organize your Indexes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#labels VertexAiIndex#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.metadata"></a>

```typescript
public readonly metadata: VertexAiIndexMetadata;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata">VertexAiIndexMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#metadata VertexAiIndex#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#project VertexAiIndex#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the index. eg us-central1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#region VertexAiIndex#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VertexAiIndexTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts">VertexAiIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#timeouts VertexAiIndex#timeouts}

---

### VertexAiIndexDeployedIndexes <a name="VertexAiIndexDeployedIndexes" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexes.Initializer"></a>

```typescript
import { vertexAiIndex } from '@cdktf/provider-google'

const vertexAiIndexDeployedIndexes: vertexAiIndex.VertexAiIndexDeployedIndexes = { ... }
```


### VertexAiIndexIndexStats <a name="VertexAiIndexIndexStats" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStats.Initializer"></a>

```typescript
import { vertexAiIndex } from '@cdktf/provider-google'

const vertexAiIndexIndexStats: vertexAiIndex.VertexAiIndexIndexStats = { ... }
```


### VertexAiIndexMetadata <a name="VertexAiIndexMetadata" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata.Initializer"></a>

```typescript
import { vertexAiIndex } from '@cdktf/provider-google'

const vertexAiIndexMetadata: vertexAiIndex.VertexAiIndexMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig">VertexAiIndexMetadataConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata.property.contentsDeltaUri">contentsDeltaUri</a></code> | <code>string</code> | Allows inserting, updating  or deleting the contents of the Matching Engine Index. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata.property.isCompleteOverwrite">isCompleteOverwrite</a></code> | <code>boolean \| cdktf.IResolvable</code> | If this field is set together with contentsDeltaUri when calling IndexService.UpdateIndex, then existing content of the Index will be replaced by the data from the contentsDeltaUri. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata.property.config"></a>

```typescript
public readonly config: VertexAiIndexMetadataConfig;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig">VertexAiIndexMetadataConfig</a>

config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#config VertexAiIndex#config}

---

##### `contentsDeltaUri`<sup>Optional</sup> <a name="contentsDeltaUri" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata.property.contentsDeltaUri"></a>

```typescript
public readonly contentsDeltaUri: string;
```

- *Type:* string

Allows inserting, updating  or deleting the contents of the Matching Engine Index.

The string must be a valid Cloud Storage directory path. If this
field is set when calling IndexService.UpdateIndex, then no other
Index field can be also updated as part of the same call.
The expected structure and format of the files this URI points to is
described at https://cloud.google.com/vertex-ai/docs/matching-engine/using-matching-engine#input-data-format

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#contents_delta_uri VertexAiIndex#contents_delta_uri}

---

##### `isCompleteOverwrite`<sup>Optional</sup> <a name="isCompleteOverwrite" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata.property.isCompleteOverwrite"></a>

```typescript
public readonly isCompleteOverwrite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If this field is set together with contentsDeltaUri when calling IndexService.UpdateIndex, then existing content of the Index will be replaced by the data from the contentsDeltaUri.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#is_complete_overwrite VertexAiIndex#is_complete_overwrite}

---

### VertexAiIndexMetadataConfig <a name="VertexAiIndexMetadataConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.Initializer"></a>

```typescript
import { vertexAiIndex } from '@cdktf/provider-google'

const vertexAiIndexMetadataConfig: vertexAiIndex.VertexAiIndexMetadataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.dimensions">dimensions</a></code> | <code>number</code> | The number of dimensions of the input vectors. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.algorithmConfig">algorithmConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig">VertexAiIndexMetadataConfigAlgorithmConfig</a></code> | algorithm_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.approximateNeighborsCount">approximateNeighborsCount</a></code> | <code>number</code> | The default number of neighbors to find via approximate search before exact reordering is performed. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.distanceMeasureType">distanceMeasureType</a></code> | <code>string</code> | The distance measure used in nearest neighbor search. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.featureNormType">featureNormType</a></code> | <code>string</code> | Type of normalization to be carried out on each vector. |

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.dimensions"></a>

```typescript
public readonly dimensions: number;
```

- *Type:* number

The number of dimensions of the input vectors.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#dimensions VertexAiIndex#dimensions}

---

##### `algorithmConfig`<sup>Optional</sup> <a name="algorithmConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.algorithmConfig"></a>

```typescript
public readonly algorithmConfig: VertexAiIndexMetadataConfigAlgorithmConfig;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig">VertexAiIndexMetadataConfigAlgorithmConfig</a>

algorithm_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#algorithm_config VertexAiIndex#algorithm_config}

---

##### `approximateNeighborsCount`<sup>Optional</sup> <a name="approximateNeighborsCount" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.approximateNeighborsCount"></a>

```typescript
public readonly approximateNeighborsCount: number;
```

- *Type:* number

The default number of neighbors to find via approximate search before exact reordering is performed.

Exact reordering is a procedure where results returned by an
approximate search algorithm are reordered via a more expensive distance computation.
Required if tree-AH algorithm is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#approximate_neighbors_count VertexAiIndex#approximate_neighbors_count}

---

##### `distanceMeasureType`<sup>Optional</sup> <a name="distanceMeasureType" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.distanceMeasureType"></a>

```typescript
public readonly distanceMeasureType: string;
```

- *Type:* string

The distance measure used in nearest neighbor search.

The value must be one of the followings:
SQUARED_L2_DISTANCE: Euclidean (L_2) Distance
L1_DISTANCE: Manhattan (L_1) Distance
COSINE_DISTANCE: Cosine Distance. Defined as 1 - cosine similarity.
DOT_PRODUCT_DISTANCE: Dot Product Distance. Defined as a negative of the dot product

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#distance_measure_type VertexAiIndex#distance_measure_type}

---

##### `featureNormType`<sup>Optional</sup> <a name="featureNormType" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig.property.featureNormType"></a>

```typescript
public readonly featureNormType: string;
```

- *Type:* string

Type of normalization to be carried out on each vector.

The value must be one of the followings: 
UNIT_L2_NORM: Unit L2 normalization type
NONE: No normalization type is specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#feature_norm_type VertexAiIndex#feature_norm_type}

---

### VertexAiIndexMetadataConfigAlgorithmConfig <a name="VertexAiIndexMetadataConfigAlgorithmConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig.Initializer"></a>

```typescript
import { vertexAiIndex } from '@cdktf/provider-google'

const vertexAiIndexMetadataConfigAlgorithmConfig: vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig.property.bruteForceConfig">bruteForceConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a></code> | brute_force_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig.property.treeAhConfig">treeAhConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a></code> | tree_ah_config block. |

---

##### `bruteForceConfig`<sup>Optional</sup> <a name="bruteForceConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig.property.bruteForceConfig"></a>

```typescript
public readonly bruteForceConfig: VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a>

brute_force_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#brute_force_config VertexAiIndex#brute_force_config}

---

##### `treeAhConfig`<sup>Optional</sup> <a name="treeAhConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig.property.treeAhConfig"></a>

```typescript
public readonly treeAhConfig: VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a>

tree_ah_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#tree_ah_config VertexAiIndex#tree_ah_config}

---

### VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig <a name="VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig.Initializer"></a>

```typescript
import { vertexAiIndex } from '@cdktf/provider-google'

const vertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig: vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig = { ... }
```


### VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig <a name="VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.Initializer"></a>

```typescript
import { vertexAiIndex } from '@cdktf/provider-google'

const vertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig: vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.property.leafNodeEmbeddingCount">leafNodeEmbeddingCount</a></code> | <code>number</code> | Number of embeddings on each leaf node. The default value is 1000 if not set. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.property.leafNodesToSearchPercent">leafNodesToSearchPercent</a></code> | <code>number</code> | The default percentage of leaf nodes that any query may be searched. |

---

##### `leafNodeEmbeddingCount`<sup>Optional</sup> <a name="leafNodeEmbeddingCount" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.property.leafNodeEmbeddingCount"></a>

```typescript
public readonly leafNodeEmbeddingCount: number;
```

- *Type:* number

Number of embeddings on each leaf node. The default value is 1000 if not set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#leaf_node_embedding_count VertexAiIndex#leaf_node_embedding_count}

---

##### `leafNodesToSearchPercent`<sup>Optional</sup> <a name="leafNodesToSearchPercent" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.property.leafNodesToSearchPercent"></a>

```typescript
public readonly leafNodesToSearchPercent: number;
```

- *Type:* number

The default percentage of leaf nodes that any query may be searched.

Must be in
range 1-100, inclusive. The default value is 10 (means 10%) if not set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#leaf_nodes_to_search_percent VertexAiIndex#leaf_nodes_to_search_percent}

---

### VertexAiIndexTimeouts <a name="VertexAiIndexTimeouts" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts.Initializer"></a>

```typescript
import { vertexAiIndex } from '@cdktf/provider-google'

const vertexAiIndexTimeouts: vertexAiIndex.VertexAiIndexTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#create VertexAiIndex#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#delete VertexAiIndex#delete}. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#update VertexAiIndex#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#create VertexAiIndex#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#delete VertexAiIndex#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_index#update VertexAiIndex#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiIndexDeployedIndexesList <a name="VertexAiIndexDeployedIndexesList" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.Initializer"></a>

```typescript
import { vertexAiIndex } from '@cdktf/provider-google'

new vertexAiIndex.VertexAiIndexDeployedIndexesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.get"></a>

```typescript
public get(index: number): VertexAiIndexDeployedIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### VertexAiIndexDeployedIndexesOutputReference <a name="VertexAiIndexDeployedIndexesOutputReference" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer"></a>

```typescript
import { vertexAiIndex } from '@cdktf/provider-google'

new vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.deployedIndexId">deployedIndexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.indexEndpoint">indexEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexes">VertexAiIndexDeployedIndexes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deployedIndexId`<sup>Required</sup> <a name="deployedIndexId" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.deployedIndexId"></a>

```typescript
public readonly deployedIndexId: string;
```

- *Type:* string

---

##### `indexEndpoint`<sup>Required</sup> <a name="indexEndpoint" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.indexEndpoint"></a>

```typescript
public readonly indexEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiIndexDeployedIndexes;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexDeployedIndexes">VertexAiIndexDeployedIndexes</a>

---


### VertexAiIndexIndexStatsList <a name="VertexAiIndexIndexStatsList" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.Initializer"></a>

```typescript
import { vertexAiIndex } from '@cdktf/provider-google'

new vertexAiIndex.VertexAiIndexIndexStatsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.get"></a>

```typescript
public get(index: number): VertexAiIndexIndexStatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### VertexAiIndexIndexStatsOutputReference <a name="VertexAiIndexIndexStatsOutputReference" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer"></a>

```typescript
import { vertexAiIndex } from '@cdktf/provider-google'

new vertexAiIndex.VertexAiIndexIndexStatsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.shardsCount">shardsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.vectorsCount">vectorsCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStats">VertexAiIndexIndexStats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `shardsCount`<sup>Required</sup> <a name="shardsCount" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.shardsCount"></a>

```typescript
public readonly shardsCount: number;
```

- *Type:* number

---

##### `vectorsCount`<sup>Required</sup> <a name="vectorsCount" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.vectorsCount"></a>

```typescript
public readonly vectorsCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStatsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiIndexIndexStats;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexIndexStats">VertexAiIndexIndexStats</a>

---


### VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference <a name="VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer"></a>

```typescript
import { vertexAiIndex } from '@cdktf/provider-google'

new vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a>

---


### VertexAiIndexMetadataConfigAlgorithmConfigOutputReference <a name="VertexAiIndexMetadataConfigAlgorithmConfigOutputReference" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer"></a>

```typescript
import { vertexAiIndex } from '@cdktf/provider-google'

new vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putBruteForceConfig">putBruteForceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putTreeAhConfig">putTreeAhConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resetBruteForceConfig">resetBruteForceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resetTreeAhConfig">resetTreeAhConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBruteForceConfig` <a name="putBruteForceConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putBruteForceConfig"></a>

```typescript
public putBruteForceConfig(value: VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putBruteForceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a>

---

##### `putTreeAhConfig` <a name="putTreeAhConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putTreeAhConfig"></a>

```typescript
public putTreeAhConfig(value: VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putTreeAhConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a>

---

##### `resetBruteForceConfig` <a name="resetBruteForceConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resetBruteForceConfig"></a>

```typescript
public resetBruteForceConfig(): void
```

##### `resetTreeAhConfig` <a name="resetTreeAhConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resetTreeAhConfig"></a>

```typescript
public resetTreeAhConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.bruteForceConfig">bruteForceConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.treeAhConfig">treeAhConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.bruteForceConfigInput">bruteForceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.treeAhConfigInput">treeAhConfigInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig">VertexAiIndexMetadataConfigAlgorithmConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bruteForceConfig`<sup>Required</sup> <a name="bruteForceConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.bruteForceConfig"></a>

```typescript
public readonly bruteForceConfig: VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference</a>

---

##### `treeAhConfig`<sup>Required</sup> <a name="treeAhConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.treeAhConfig"></a>

```typescript
public readonly treeAhConfig: VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference</a>

---

##### `bruteForceConfigInput`<sup>Optional</sup> <a name="bruteForceConfigInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.bruteForceConfigInput"></a>

```typescript
public readonly bruteForceConfigInput: VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a>

---

##### `treeAhConfigInput`<sup>Optional</sup> <a name="treeAhConfigInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.treeAhConfigInput"></a>

```typescript
public readonly treeAhConfigInput: VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiIndexMetadataConfigAlgorithmConfig;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig">VertexAiIndexMetadataConfigAlgorithmConfig</a>

---


### VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference <a name="VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer"></a>

```typescript
import { vertexAiIndex } from '@cdktf/provider-google'

new vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resetLeafNodeEmbeddingCount">resetLeafNodeEmbeddingCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resetLeafNodesToSearchPercent">resetLeafNodesToSearchPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLeafNodeEmbeddingCount` <a name="resetLeafNodeEmbeddingCount" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resetLeafNodeEmbeddingCount"></a>

```typescript
public resetLeafNodeEmbeddingCount(): void
```

##### `resetLeafNodesToSearchPercent` <a name="resetLeafNodesToSearchPercent" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resetLeafNodesToSearchPercent"></a>

```typescript
public resetLeafNodesToSearchPercent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCountInput">leafNodeEmbeddingCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodesToSearchPercentInput">leafNodesToSearchPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCount">leafNodeEmbeddingCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodesToSearchPercent">leafNodesToSearchPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `leafNodeEmbeddingCountInput`<sup>Optional</sup> <a name="leafNodeEmbeddingCountInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCountInput"></a>

```typescript
public readonly leafNodeEmbeddingCountInput: number;
```

- *Type:* number

---

##### `leafNodesToSearchPercentInput`<sup>Optional</sup> <a name="leafNodesToSearchPercentInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodesToSearchPercentInput"></a>

```typescript
public readonly leafNodesToSearchPercentInput: number;
```

- *Type:* number

---

##### `leafNodeEmbeddingCount`<sup>Required</sup> <a name="leafNodeEmbeddingCount" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCount"></a>

```typescript
public readonly leafNodeEmbeddingCount: number;
```

- *Type:* number

---

##### `leafNodesToSearchPercent`<sup>Required</sup> <a name="leafNodesToSearchPercent" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodesToSearchPercent"></a>

```typescript
public readonly leafNodesToSearchPercent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a>

---


### VertexAiIndexMetadataConfigOutputReference <a name="VertexAiIndexMetadataConfigOutputReference" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.Initializer"></a>

```typescript
import { vertexAiIndex } from '@cdktf/provider-google'

new vertexAiIndex.VertexAiIndexMetadataConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.putAlgorithmConfig">putAlgorithmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resetAlgorithmConfig">resetAlgorithmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resetApproximateNeighborsCount">resetApproximateNeighborsCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resetDistanceMeasureType">resetDistanceMeasureType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resetFeatureNormType">resetFeatureNormType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlgorithmConfig` <a name="putAlgorithmConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.putAlgorithmConfig"></a>

```typescript
public putAlgorithmConfig(value: VertexAiIndexMetadataConfigAlgorithmConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.putAlgorithmConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig">VertexAiIndexMetadataConfigAlgorithmConfig</a>

---

##### `resetAlgorithmConfig` <a name="resetAlgorithmConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resetAlgorithmConfig"></a>

```typescript
public resetAlgorithmConfig(): void
```

##### `resetApproximateNeighborsCount` <a name="resetApproximateNeighborsCount" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resetApproximateNeighborsCount"></a>

```typescript
public resetApproximateNeighborsCount(): void
```

##### `resetDistanceMeasureType` <a name="resetDistanceMeasureType" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resetDistanceMeasureType"></a>

```typescript
public resetDistanceMeasureType(): void
```

##### `resetFeatureNormType` <a name="resetFeatureNormType" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.resetFeatureNormType"></a>

```typescript
public resetFeatureNormType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.algorithmConfig">algorithmConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference">VertexAiIndexMetadataConfigAlgorithmConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.algorithmConfigInput">algorithmConfigInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig">VertexAiIndexMetadataConfigAlgorithmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.approximateNeighborsCountInput">approximateNeighborsCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.distanceMeasureTypeInput">distanceMeasureTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.featureNormTypeInput">featureNormTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.approximateNeighborsCount">approximateNeighborsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.dimensions">dimensions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.distanceMeasureType">distanceMeasureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.featureNormType">featureNormType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig">VertexAiIndexMetadataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmConfig`<sup>Required</sup> <a name="algorithmConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.algorithmConfig"></a>

```typescript
public readonly algorithmConfig: VertexAiIndexMetadataConfigAlgorithmConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfigOutputReference">VertexAiIndexMetadataConfigAlgorithmConfigOutputReference</a>

---

##### `algorithmConfigInput`<sup>Optional</sup> <a name="algorithmConfigInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.algorithmConfigInput"></a>

```typescript
public readonly algorithmConfigInput: VertexAiIndexMetadataConfigAlgorithmConfig;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigAlgorithmConfig">VertexAiIndexMetadataConfigAlgorithmConfig</a>

---

##### `approximateNeighborsCountInput`<sup>Optional</sup> <a name="approximateNeighborsCountInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.approximateNeighborsCountInput"></a>

```typescript
public readonly approximateNeighborsCountInput: number;
```

- *Type:* number

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: number;
```

- *Type:* number

---

##### `distanceMeasureTypeInput`<sup>Optional</sup> <a name="distanceMeasureTypeInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.distanceMeasureTypeInput"></a>

```typescript
public readonly distanceMeasureTypeInput: string;
```

- *Type:* string

---

##### `featureNormTypeInput`<sup>Optional</sup> <a name="featureNormTypeInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.featureNormTypeInput"></a>

```typescript
public readonly featureNormTypeInput: string;
```

- *Type:* string

---

##### `approximateNeighborsCount`<sup>Required</sup> <a name="approximateNeighborsCount" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.approximateNeighborsCount"></a>

```typescript
public readonly approximateNeighborsCount: number;
```

- *Type:* number

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: number;
```

- *Type:* number

---

##### `distanceMeasureType`<sup>Required</sup> <a name="distanceMeasureType" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.distanceMeasureType"></a>

```typescript
public readonly distanceMeasureType: string;
```

- *Type:* string

---

##### `featureNormType`<sup>Required</sup> <a name="featureNormType" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.featureNormType"></a>

```typescript
public readonly featureNormType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiIndexMetadataConfig;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig">VertexAiIndexMetadataConfig</a>

---


### VertexAiIndexMetadataOutputReference <a name="VertexAiIndexMetadataOutputReference" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.Initializer"></a>

```typescript
import { vertexAiIndex } from '@cdktf/provider-google'

new vertexAiIndex.VertexAiIndexMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resetContentsDeltaUri">resetContentsDeltaUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resetIsCompleteOverwrite">resetIsCompleteOverwrite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.putConfig"></a>

```typescript
public putConfig(value: VertexAiIndexMetadataConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig">VertexAiIndexMetadataConfig</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetContentsDeltaUri` <a name="resetContentsDeltaUri" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resetContentsDeltaUri"></a>

```typescript
public resetContentsDeltaUri(): void
```

##### `resetIsCompleteOverwrite` <a name="resetIsCompleteOverwrite" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.resetIsCompleteOverwrite"></a>

```typescript
public resetIsCompleteOverwrite(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference">VertexAiIndexMetadataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig">VertexAiIndexMetadataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.contentsDeltaUriInput">contentsDeltaUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.isCompleteOverwriteInput">isCompleteOverwriteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.contentsDeltaUri">contentsDeltaUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.isCompleteOverwrite">isCompleteOverwrite</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata">VertexAiIndexMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.config"></a>

```typescript
public readonly config: VertexAiIndexMetadataConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfigOutputReference">VertexAiIndexMetadataConfigOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.configInput"></a>

```typescript
public readonly configInput: VertexAiIndexMetadataConfig;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataConfig">VertexAiIndexMetadataConfig</a>

---

##### `contentsDeltaUriInput`<sup>Optional</sup> <a name="contentsDeltaUriInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.contentsDeltaUriInput"></a>

```typescript
public readonly contentsDeltaUriInput: string;
```

- *Type:* string

---

##### `isCompleteOverwriteInput`<sup>Optional</sup> <a name="isCompleteOverwriteInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.isCompleteOverwriteInput"></a>

```typescript
public readonly isCompleteOverwriteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `contentsDeltaUri`<sup>Required</sup> <a name="contentsDeltaUri" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.contentsDeltaUri"></a>

```typescript
public readonly contentsDeltaUri: string;
```

- *Type:* string

---

##### `isCompleteOverwrite`<sup>Required</sup> <a name="isCompleteOverwrite" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.isCompleteOverwrite"></a>

```typescript
public readonly isCompleteOverwrite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiIndexMetadata;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexMetadata">VertexAiIndexMetadata</a>

---


### VertexAiIndexTimeoutsOutputReference <a name="VertexAiIndexTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.Initializer"></a>

```typescript
import { vertexAiIndex } from '@cdktf/provider-google'

new vertexAiIndex.VertexAiIndexTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts">VertexAiIndexTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiIndexTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndex.VertexAiIndexTimeouts">VertexAiIndexTimeouts</a> | cdktf.IResolvable

---



