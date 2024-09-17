# `vertexAiIndexEndpointDeployedIndex` Submodule <a name="`vertexAiIndexEndpointDeployedIndex` Submodule" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiIndexEndpointDeployedIndex <a name="VertexAiIndexEndpointDeployedIndex" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index google_vertex_ai_index_endpoint_deployed_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer"></a>

```typescript
import { vertexAiIndexEndpointDeployedIndex } from '@cdktf/provider-google'

new vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex(scope: Construct, id: string, config: VertexAiIndexEndpointDeployedIndexConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig">VertexAiIndexEndpointDeployedIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig">VertexAiIndexEndpointDeployedIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.putAutomaticResources">putAutomaticResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.putDedicatedResources">putDedicatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.putDeployedIndexAuthConfig">putDeployedIndexAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetAutomaticResources">resetAutomaticResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetDedicatedResources">resetDedicatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetDeployedIndexAuthConfig">resetDeployedIndexAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetDeploymentGroup">resetDeploymentGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetEnableAccessLogging">resetEnableAccessLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetReservedIpRanges">resetReservedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutomaticResources` <a name="putAutomaticResources" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.putAutomaticResources"></a>

```typescript
public putAutomaticResources(value: VertexAiIndexEndpointDeployedIndexAutomaticResources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.putAutomaticResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources">VertexAiIndexEndpointDeployedIndexAutomaticResources</a>

---

##### `putDedicatedResources` <a name="putDedicatedResources" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.putDedicatedResources"></a>

```typescript
public putDedicatedResources(value: VertexAiIndexEndpointDeployedIndexDedicatedResources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.putDedicatedResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources">VertexAiIndexEndpointDeployedIndexDedicatedResources</a>

---

##### `putDeployedIndexAuthConfig` <a name="putDeployedIndexAuthConfig" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.putDeployedIndexAuthConfig"></a>

```typescript
public putDeployedIndexAuthConfig(value: VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.putDeployedIndexAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.putTimeouts"></a>

```typescript
public putTimeouts(value: VertexAiIndexEndpointDeployedIndexTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts">VertexAiIndexEndpointDeployedIndexTimeouts</a>

---

##### `resetAutomaticResources` <a name="resetAutomaticResources" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetAutomaticResources"></a>

```typescript
public resetAutomaticResources(): void
```

##### `resetDedicatedResources` <a name="resetDedicatedResources" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetDedicatedResources"></a>

```typescript
public resetDedicatedResources(): void
```

##### `resetDeployedIndexAuthConfig` <a name="resetDeployedIndexAuthConfig" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetDeployedIndexAuthConfig"></a>

```typescript
public resetDeployedIndexAuthConfig(): void
```

##### `resetDeploymentGroup` <a name="resetDeploymentGroup" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetDeploymentGroup"></a>

```typescript
public resetDeploymentGroup(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEnableAccessLogging` <a name="resetEnableAccessLogging" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetEnableAccessLogging"></a>

```typescript
public resetEnableAccessLogging(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetId"></a>

```typescript
public resetId(): void
```

##### `resetReservedIpRanges` <a name="resetReservedIpRanges" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetReservedIpRanges"></a>

```typescript
public resetReservedIpRanges(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VertexAiIndexEndpointDeployedIndex resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.isConstruct"></a>

```typescript
import { vertexAiIndexEndpointDeployedIndex } from '@cdktf/provider-google'

vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.isTerraformElement"></a>

```typescript
import { vertexAiIndexEndpointDeployedIndex } from '@cdktf/provider-google'

vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.isTerraformResource"></a>

```typescript
import { vertexAiIndexEndpointDeployedIndex } from '@cdktf/provider-google'

vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.generateConfigForImport"></a>

```typescript
import { vertexAiIndexEndpointDeployedIndex } from '@cdktf/provider-google'

vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VertexAiIndexEndpointDeployedIndex resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VertexAiIndexEndpointDeployedIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VertexAiIndexEndpointDeployedIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VertexAiIndexEndpointDeployedIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.automaticResources">automaticResources</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference">VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.dedicatedResources">dedicatedResources</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference">VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.deployedIndexAuthConfig">deployedIndexAuthConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.indexSyncTime">indexSyncTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.privateEndpoints">privateEndpoints</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList">VertexAiIndexEndpointDeployedIndexPrivateEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference">VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.automaticResourcesInput">automaticResourcesInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources">VertexAiIndexEndpointDeployedIndexAutomaticResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.dedicatedResourcesInput">dedicatedResourcesInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources">VertexAiIndexEndpointDeployedIndexDedicatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.deployedIndexAuthConfigInput">deployedIndexAuthConfigInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.deployedIndexIdInput">deployedIndexIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.deploymentGroupInput">deploymentGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.enableAccessLoggingInput">enableAccessLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.indexEndpointInput">indexEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.indexInput">indexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.reservedIpRangesInput">reservedIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts">VertexAiIndexEndpointDeployedIndexTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.deployedIndexId">deployedIndexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.deploymentGroup">deploymentGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.enableAccessLogging">enableAccessLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.index">index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.indexEndpoint">indexEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.reservedIpRanges">reservedIpRanges</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `automaticResources`<sup>Required</sup> <a name="automaticResources" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.automaticResources"></a>

```typescript
public readonly automaticResources: VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference">VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dedicatedResources`<sup>Required</sup> <a name="dedicatedResources" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.dedicatedResources"></a>

```typescript
public readonly dedicatedResources: VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference">VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference</a>

---

##### `deployedIndexAuthConfig`<sup>Required</sup> <a name="deployedIndexAuthConfig" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.deployedIndexAuthConfig"></a>

```typescript
public readonly deployedIndexAuthConfig: VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference</a>

---

##### `indexSyncTime`<sup>Required</sup> <a name="indexSyncTime" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.indexSyncTime"></a>

```typescript
public readonly indexSyncTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateEndpoints`<sup>Required</sup> <a name="privateEndpoints" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.privateEndpoints"></a>

```typescript
public readonly privateEndpoints: VertexAiIndexEndpointDeployedIndexPrivateEndpointsList;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList">VertexAiIndexEndpointDeployedIndexPrivateEndpointsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.timeouts"></a>

```typescript
public readonly timeouts: VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference">VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference</a>

---

##### `automaticResourcesInput`<sup>Optional</sup> <a name="automaticResourcesInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.automaticResourcesInput"></a>

```typescript
public readonly automaticResourcesInput: VertexAiIndexEndpointDeployedIndexAutomaticResources;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources">VertexAiIndexEndpointDeployedIndexAutomaticResources</a>

---

##### `dedicatedResourcesInput`<sup>Optional</sup> <a name="dedicatedResourcesInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.dedicatedResourcesInput"></a>

```typescript
public readonly dedicatedResourcesInput: VertexAiIndexEndpointDeployedIndexDedicatedResources;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources">VertexAiIndexEndpointDeployedIndexDedicatedResources</a>

---

##### `deployedIndexAuthConfigInput`<sup>Optional</sup> <a name="deployedIndexAuthConfigInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.deployedIndexAuthConfigInput"></a>

```typescript
public readonly deployedIndexAuthConfigInput: VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a>

---

##### `deployedIndexIdInput`<sup>Optional</sup> <a name="deployedIndexIdInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.deployedIndexIdInput"></a>

```typescript
public readonly deployedIndexIdInput: string;
```

- *Type:* string

---

##### `deploymentGroupInput`<sup>Optional</sup> <a name="deploymentGroupInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.deploymentGroupInput"></a>

```typescript
public readonly deploymentGroupInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enableAccessLoggingInput`<sup>Optional</sup> <a name="enableAccessLoggingInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.enableAccessLoggingInput"></a>

```typescript
public readonly enableAccessLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexEndpointInput`<sup>Optional</sup> <a name="indexEndpointInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.indexEndpointInput"></a>

```typescript
public readonly indexEndpointInput: string;
```

- *Type:* string

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.indexInput"></a>

```typescript
public readonly indexInput: string;
```

- *Type:* string

---

##### `reservedIpRangesInput`<sup>Optional</sup> <a name="reservedIpRangesInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.reservedIpRangesInput"></a>

```typescript
public readonly reservedIpRangesInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VertexAiIndexEndpointDeployedIndexTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts">VertexAiIndexEndpointDeployedIndexTimeouts</a>

---

##### `deployedIndexId`<sup>Required</sup> <a name="deployedIndexId" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.deployedIndexId"></a>

```typescript
public readonly deployedIndexId: string;
```

- *Type:* string

---

##### `deploymentGroup`<sup>Required</sup> <a name="deploymentGroup" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.deploymentGroup"></a>

```typescript
public readonly deploymentGroup: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enableAccessLogging`<sup>Required</sup> <a name="enableAccessLogging" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.enableAccessLogging"></a>

```typescript
public readonly enableAccessLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

---

##### `indexEndpoint`<sup>Required</sup> <a name="indexEndpoint" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.indexEndpoint"></a>

```typescript
public readonly indexEndpoint: string;
```

- *Type:* string

---

##### `reservedIpRanges`<sup>Required</sup> <a name="reservedIpRanges" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.reservedIpRanges"></a>

```typescript
public readonly reservedIpRanges: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndex.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiIndexEndpointDeployedIndexAutomaticResources <a name="VertexAiIndexEndpointDeployedIndexAutomaticResources" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources.Initializer"></a>

```typescript
import { vertexAiIndexEndpointDeployedIndex } from '@cdktf/provider-google'

const vertexAiIndexEndpointDeployedIndexAutomaticResources: vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources.property.maxReplicaCount">maxReplicaCount</a></code> | <code>number</code> | The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources.property.minReplicaCount">minReplicaCount</a></code> | <code>number</code> | The minimum number of replicas this DeployedModel will be always deployed on. |

---

##### `maxReplicaCount`<sup>Optional</sup> <a name="maxReplicaCount" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources.property.maxReplicaCount"></a>

```typescript
public readonly maxReplicaCount: number;
```

- *Type:* number

The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases.

If maxReplicaCount is not set, the default value is minReplicaCount. The max allowed replica count is 1000.

The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. If the requested value is too large, the deployment will error, but if deployment succeeds then the ability to scale the model to that many replicas is guaranteed (barring service outages). If traffic against the DeployedModel increases beyond what its replicas at maximum may handle, a portion of the traffic will be dropped. If this value is not provided, a no upper bound for scaling under heavy traffic will be assume, though Vertex AI may be unable to scale beyond certain replica number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#max_replica_count VertexAiIndexEndpointDeployedIndex#max_replica_count}

---

##### `minReplicaCount`<sup>Optional</sup> <a name="minReplicaCount" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources.property.minReplicaCount"></a>

```typescript
public readonly minReplicaCount: number;
```

- *Type:* number

The minimum number of replicas this DeployedModel will be always deployed on.

If minReplicaCount is not set, the default value is 2 (we don't provide SLA when minReplicaCount=1).

If traffic against it increases, it may dynamically be deployed onto more replicas up to [maxReplicaCount](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/AutomaticResources#FIELDS.max_replica_count), and as traffic decreases, some of these extra replicas may be freed. If the requested value is too large, the deployment will error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#min_replica_count VertexAiIndexEndpointDeployedIndex#min_replica_count}

---

### VertexAiIndexEndpointDeployedIndexConfig <a name="VertexAiIndexEndpointDeployedIndexConfig" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.Initializer"></a>

```typescript
import { vertexAiIndexEndpointDeployedIndex } from '@cdktf/provider-google'

const vertexAiIndexEndpointDeployedIndexConfig: vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.deployedIndexId">deployedIndexId</a></code> | <code>string</code> | The user specified ID of the DeployedIndex. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.index">index</a></code> | <code>string</code> | The name of the Index this is the deployment of. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.indexEndpoint">indexEndpoint</a></code> | <code>string</code> | Identifies the index endpoint. Must be in the format 'projects/{{project}}/locations/{{region}}/indexEndpoints/{{indexEndpoint}}'. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.automaticResources">automaticResources</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources">VertexAiIndexEndpointDeployedIndexAutomaticResources</a></code> | automatic_resources block. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.dedicatedResources">dedicatedResources</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources">VertexAiIndexEndpointDeployedIndexDedicatedResources</a></code> | dedicated_resources block. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.deployedIndexAuthConfig">deployedIndexAuthConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a></code> | deployed_index_auth_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.deploymentGroup">deploymentGroup</a></code> | <code>string</code> | The deployment group can be no longer than 64 characters (eg: 'test', 'prod'). |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the Index. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.enableAccessLogging">enableAccessLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, private endpoint's access logs are sent to Cloud Logging. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#id VertexAiIndexEndpointDeployedIndex#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.reservedIpRanges">reservedIpRanges</a></code> | <code>string[]</code> | A list of reserved ip ranges under the VPC network that can be used for this DeployedIndex. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts">VertexAiIndexEndpointDeployedIndexTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deployedIndexId`<sup>Required</sup> <a name="deployedIndexId" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.deployedIndexId"></a>

```typescript
public readonly deployedIndexId: string;
```

- *Type:* string

The user specified ID of the DeployedIndex.

The ID can be up to 128 characters long and must start with a letter and only contain letters, numbers, and underscores. The ID must be unique within the project it is created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#deployed_index_id VertexAiIndexEndpointDeployedIndex#deployed_index_id}

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

The name of the Index this is the deployment of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#index VertexAiIndexEndpointDeployedIndex#index}

---

##### `indexEndpoint`<sup>Required</sup> <a name="indexEndpoint" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.indexEndpoint"></a>

```typescript
public readonly indexEndpoint: string;
```

- *Type:* string

Identifies the index endpoint. Must be in the format 'projects/{{project}}/locations/{{region}}/indexEndpoints/{{indexEndpoint}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#index_endpoint VertexAiIndexEndpointDeployedIndex#index_endpoint}

---

##### `automaticResources`<sup>Optional</sup> <a name="automaticResources" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.automaticResources"></a>

```typescript
public readonly automaticResources: VertexAiIndexEndpointDeployedIndexAutomaticResources;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources">VertexAiIndexEndpointDeployedIndexAutomaticResources</a>

automatic_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#automatic_resources VertexAiIndexEndpointDeployedIndex#automatic_resources}

---

##### `dedicatedResources`<sup>Optional</sup> <a name="dedicatedResources" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.dedicatedResources"></a>

```typescript
public readonly dedicatedResources: VertexAiIndexEndpointDeployedIndexDedicatedResources;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources">VertexAiIndexEndpointDeployedIndexDedicatedResources</a>

dedicated_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#dedicated_resources VertexAiIndexEndpointDeployedIndex#dedicated_resources}

---

##### `deployedIndexAuthConfig`<sup>Optional</sup> <a name="deployedIndexAuthConfig" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.deployedIndexAuthConfig"></a>

```typescript
public readonly deployedIndexAuthConfig: VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a>

deployed_index_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#deployed_index_auth_config VertexAiIndexEndpointDeployedIndex#deployed_index_auth_config}

---

##### `deploymentGroup`<sup>Optional</sup> <a name="deploymentGroup" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.deploymentGroup"></a>

```typescript
public readonly deploymentGroup: string;
```

- *Type:* string

The deployment group can be no longer than 64 characters (eg: 'test', 'prod').

If not set, we will use the 'default' deployment group.
Creating deployment_groups with reserved_ip_ranges is a recommended practice when the peered network has multiple peering ranges. This creates your deployments from predictable IP spaces for easier traffic administration. Also, one deployment_group (except 'default') can only be used with the same reserved_ip_ranges which means if the deployment_group has been used with reserved_ip_ranges: [a, b, c], using it with [a, b] or [d, e] is disallowed. [See the official documentation here](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.indexEndpoints#DeployedIndex.FIELDS.deployment_group).
Note: we only support up to 5 deployment groups (not including 'default').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#deployment_group VertexAiIndexEndpointDeployedIndex#deployment_group}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the Index.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#display_name VertexAiIndexEndpointDeployedIndex#display_name}

---

##### `enableAccessLogging`<sup>Optional</sup> <a name="enableAccessLogging" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.enableAccessLogging"></a>

```typescript
public readonly enableAccessLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, private endpoint's access logs are sent to Cloud Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#enable_access_logging VertexAiIndexEndpointDeployedIndex#enable_access_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#id VertexAiIndexEndpointDeployedIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reservedIpRanges`<sup>Optional</sup> <a name="reservedIpRanges" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.reservedIpRanges"></a>

```typescript
public readonly reservedIpRanges: string[];
```

- *Type:* string[]

A list of reserved ip ranges under the VPC network that can be used for this DeployedIndex.

If set, we will deploy the index within the provided ip ranges. Otherwise, the index might be deployed to any ip ranges under the provided VPC network.

The value should be the name of the address (https://cloud.google.com/compute/docs/reference/rest/v1/addresses) Example: ['vertex-ai-ip-range'].

For more information about subnets and network IP ranges, please see https://cloud.google.com/vpc/docs/subnets#manually_created_subnet_ip_ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#reserved_ip_ranges VertexAiIndexEndpointDeployedIndex#reserved_ip_ranges}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VertexAiIndexEndpointDeployedIndexTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts">VertexAiIndexEndpointDeployedIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#timeouts VertexAiIndexEndpointDeployedIndex#timeouts}

---

### VertexAiIndexEndpointDeployedIndexDedicatedResources <a name="VertexAiIndexEndpointDeployedIndexDedicatedResources" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources.Initializer"></a>

```typescript
import { vertexAiIndexEndpointDeployedIndex } from '@cdktf/provider-google'

const vertexAiIndexEndpointDeployedIndexDedicatedResources: vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources.property.machineSpec">machineSpec</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources.property.minReplicaCount">minReplicaCount</a></code> | <code>number</code> | The minimum number of machine replicas this DeployedModel will be always deployed on. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources.property.maxReplicaCount">maxReplicaCount</a></code> | <code>number</code> | The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. |

---

##### `machineSpec`<sup>Required</sup> <a name="machineSpec" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources.property.machineSpec"></a>

```typescript
public readonly machineSpec: VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#machine_spec VertexAiIndexEndpointDeployedIndex#machine_spec}

---

##### `minReplicaCount`<sup>Required</sup> <a name="minReplicaCount" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources.property.minReplicaCount"></a>

```typescript
public readonly minReplicaCount: number;
```

- *Type:* number

The minimum number of machine replicas this DeployedModel will be always deployed on.

This value must be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#min_replica_count VertexAiIndexEndpointDeployedIndex#min_replica_count}

---

##### `maxReplicaCount`<sup>Optional</sup> <a name="maxReplicaCount" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources.property.maxReplicaCount"></a>

```typescript
public readonly maxReplicaCount: number;
```

- *Type:* number

The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases.

If maxReplicaCount is not set, the default value is minReplicaCount

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#max_replica_count VertexAiIndexEndpointDeployedIndex#max_replica_count}

---

### VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec <a name="VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec.Initializer"></a>

```typescript
import { vertexAiIndexEndpointDeployedIndex } from '@cdktf/provider-google'

const vertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec: vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec.property.machineType">machineType</a></code> | <code>string</code> | The type of the machine. |

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

The type of the machine.

See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types)

See the [list of machine types supported for custom training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types).

For [DeployedModel](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.endpoints#DeployedModel) this field is optional, and the default value is n1-standard-2. For [BatchPredictionJob](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.batchPredictionJobs#BatchPredictionJob) or as part of [WorkerPoolSpec](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/CustomJobSpec#WorkerPoolSpec) this field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#machine_type VertexAiIndexEndpointDeployedIndex#machine_type}

---

### VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig <a name="VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig.Initializer"></a>

```typescript
import { vertexAiIndexEndpointDeployedIndex } from '@cdktf/provider-google'

const vertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig: vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig.property.authProvider">authProvider</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a></code> | auth_provider block. |

---

##### `authProvider`<sup>Optional</sup> <a name="authProvider" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig.property.authProvider"></a>

```typescript
public readonly authProvider: VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a>

auth_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#auth_provider VertexAiIndexEndpointDeployedIndex#auth_provider}

---

### VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider <a name="VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider.Initializer"></a>

```typescript
import { vertexAiIndexEndpointDeployedIndex } from '@cdktf/provider-google'

const vertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider: vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider.property.allowedIssuers">allowedIssuers</a></code> | <code>string[]</code> | A list of allowed JWT issuers. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider.property.audiences">audiences</a></code> | <code>string[]</code> | The list of JWT audiences. |

---

##### `allowedIssuers`<sup>Optional</sup> <a name="allowedIssuers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider.property.allowedIssuers"></a>

```typescript
public readonly allowedIssuers: string[];
```

- *Type:* string[]

A list of allowed JWT issuers.

Each entry must be a valid Google service account, in the following format: service-account-name@project-id.iam.gserviceaccount.com

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#allowed_issuers VertexAiIndexEndpointDeployedIndex#allowed_issuers}

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider.property.audiences"></a>

```typescript
public readonly audiences: string[];
```

- *Type:* string[]

The list of JWT audiences.

that are allowed to access. A JWT containing any of these audiences will be accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#audiences VertexAiIndexEndpointDeployedIndex#audiences}

---

### VertexAiIndexEndpointDeployedIndexPrivateEndpoints <a name="VertexAiIndexEndpointDeployedIndexPrivateEndpoints" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpoints.Initializer"></a>

```typescript
import { vertexAiIndexEndpointDeployedIndex } from '@cdktf/provider-google'

const vertexAiIndexEndpointDeployedIndexPrivateEndpoints: vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpoints = { ... }
```


### VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints <a name="VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints.Initializer"></a>

```typescript
import { vertexAiIndexEndpointDeployedIndex } from '@cdktf/provider-google'

const vertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints: vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints = { ... }
```


### VertexAiIndexEndpointDeployedIndexTimeouts <a name="VertexAiIndexEndpointDeployedIndexTimeouts" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts.Initializer"></a>

```typescript
import { vertexAiIndexEndpointDeployedIndex } from '@cdktf/provider-google'

const vertexAiIndexEndpointDeployedIndexTimeouts: vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#create VertexAiIndexEndpointDeployedIndex#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#delete VertexAiIndexEndpointDeployedIndex#delete}. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#update VertexAiIndexEndpointDeployedIndex#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#create VertexAiIndexEndpointDeployedIndex#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#delete VertexAiIndexEndpointDeployedIndex#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/vertex_ai_index_endpoint_deployed_index#update VertexAiIndexEndpointDeployedIndex#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference <a name="VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.Initializer"></a>

```typescript
import { vertexAiIndexEndpointDeployedIndex } from '@cdktf/provider-google'

new vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resetMaxReplicaCount">resetMaxReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resetMinReplicaCount">resetMinReplicaCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxReplicaCount` <a name="resetMaxReplicaCount" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resetMaxReplicaCount"></a>

```typescript
public resetMaxReplicaCount(): void
```

##### `resetMinReplicaCount` <a name="resetMinReplicaCount" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.resetMinReplicaCount"></a>

```typescript
public resetMinReplicaCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.maxReplicaCountInput">maxReplicaCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.minReplicaCountInput">minReplicaCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.maxReplicaCount">maxReplicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.minReplicaCount">minReplicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources">VertexAiIndexEndpointDeployedIndexAutomaticResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxReplicaCountInput`<sup>Optional</sup> <a name="maxReplicaCountInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.maxReplicaCountInput"></a>

```typescript
public readonly maxReplicaCountInput: number;
```

- *Type:* number

---

##### `minReplicaCountInput`<sup>Optional</sup> <a name="minReplicaCountInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.minReplicaCountInput"></a>

```typescript
public readonly minReplicaCountInput: number;
```

- *Type:* number

---

##### `maxReplicaCount`<sup>Required</sup> <a name="maxReplicaCount" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.maxReplicaCount"></a>

```typescript
public readonly maxReplicaCount: number;
```

- *Type:* number

---

##### `minReplicaCount`<sup>Required</sup> <a name="minReplicaCount" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.minReplicaCount"></a>

```typescript
public readonly minReplicaCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiIndexEndpointDeployedIndexAutomaticResources;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexAutomaticResources">VertexAiIndexEndpointDeployedIndexAutomaticResources</a>

---


### VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference <a name="VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.Initializer"></a>

```typescript
import { vertexAiIndexEndpointDeployedIndex } from '@cdktf/provider-google'

new vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.resetMachineType"></a>

```typescript
public resetMachineType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a>

---


### VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference <a name="VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.Initializer"></a>

```typescript
import { vertexAiIndexEndpointDeployedIndex } from '@cdktf/provider-google'

new vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.putMachineSpec">putMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.resetMaxReplicaCount">resetMaxReplicaCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMachineSpec` <a name="putMachineSpec" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.putMachineSpec"></a>

```typescript
public putMachineSpec(value: VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a>

---

##### `resetMaxReplicaCount` <a name="resetMaxReplicaCount" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.resetMaxReplicaCount"></a>

```typescript
public resetMaxReplicaCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.machineSpec">machineSpec</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference">VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.machineSpecInput">machineSpecInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.maxReplicaCountInput">maxReplicaCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.minReplicaCountInput">minReplicaCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.maxReplicaCount">maxReplicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.minReplicaCount">minReplicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources">VertexAiIndexEndpointDeployedIndexDedicatedResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `machineSpec`<sup>Required</sup> <a name="machineSpec" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.machineSpec"></a>

```typescript
public readonly machineSpec: VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference">VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference</a>

---

##### `machineSpecInput`<sup>Optional</sup> <a name="machineSpecInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.machineSpecInput"></a>

```typescript
public readonly machineSpecInput: VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec">VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec</a>

---

##### `maxReplicaCountInput`<sup>Optional</sup> <a name="maxReplicaCountInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.maxReplicaCountInput"></a>

```typescript
public readonly maxReplicaCountInput: number;
```

- *Type:* number

---

##### `minReplicaCountInput`<sup>Optional</sup> <a name="minReplicaCountInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.minReplicaCountInput"></a>

```typescript
public readonly minReplicaCountInput: number;
```

- *Type:* number

---

##### `maxReplicaCount`<sup>Required</sup> <a name="maxReplicaCount" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.maxReplicaCount"></a>

```typescript
public readonly maxReplicaCount: number;
```

- *Type:* number

---

##### `minReplicaCount`<sup>Required</sup> <a name="minReplicaCount" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.minReplicaCount"></a>

```typescript
public readonly minReplicaCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiIndexEndpointDeployedIndexDedicatedResources;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDedicatedResources">VertexAiIndexEndpointDeployedIndexDedicatedResources</a>

---


### VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference <a name="VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.Initializer"></a>

```typescript
import { vertexAiIndexEndpointDeployedIndex } from '@cdktf/provider-google'

new vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resetAllowedIssuers">resetAllowedIssuers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resetAudiences">resetAudiences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedIssuers` <a name="resetAllowedIssuers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resetAllowedIssuers"></a>

```typescript
public resetAllowedIssuers(): void
```

##### `resetAudiences` <a name="resetAudiences" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.resetAudiences"></a>

```typescript
public resetAudiences(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.allowedIssuersInput">allowedIssuersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.audiencesInput">audiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.allowedIssuers">allowedIssuers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.audiences">audiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedIssuersInput`<sup>Optional</sup> <a name="allowedIssuersInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.allowedIssuersInput"></a>

```typescript
public readonly allowedIssuersInput: string[];
```

- *Type:* string[]

---

##### `audiencesInput`<sup>Optional</sup> <a name="audiencesInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.audiencesInput"></a>

```typescript
public readonly audiencesInput: string[];
```

- *Type:* string[]

---

##### `allowedIssuers`<sup>Required</sup> <a name="allowedIssuers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.allowedIssuers"></a>

```typescript
public readonly allowedIssuers: string[];
```

- *Type:* string[]

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.audiences"></a>

```typescript
public readonly audiences: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a>

---


### VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference <a name="VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.Initializer"></a>

```typescript
import { vertexAiIndexEndpointDeployedIndex } from '@cdktf/provider-google'

new vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.putAuthProvider">putAuthProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.resetAuthProvider">resetAuthProvider</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthProvider` <a name="putAuthProvider" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.putAuthProvider"></a>

```typescript
public putAuthProvider(value: VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.putAuthProvider.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a>

---

##### `resetAuthProvider` <a name="resetAuthProvider" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.resetAuthProvider"></a>

```typescript
public resetAuthProvider(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.authProvider">authProvider</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.authProviderInput">authProviderInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authProvider`<sup>Required</sup> <a name="authProvider" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.authProvider"></a>

```typescript
public readonly authProvider: VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference</a>

---

##### `authProviderInput`<sup>Optional</sup> <a name="authProviderInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.authProviderInput"></a>

```typescript
public readonly authProviderInput: VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig">VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig</a>

---


### VertexAiIndexEndpointDeployedIndexPrivateEndpointsList <a name="VertexAiIndexEndpointDeployedIndexPrivateEndpointsList" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer"></a>

```typescript
import { vertexAiIndexEndpointDeployedIndex } from '@cdktf/provider-google'

new vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.get"></a>

```typescript
public get(index: number): VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference <a name="VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer"></a>

```typescript
import { vertexAiIndexEndpointDeployedIndex } from '@cdktf/provider-google'

new vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.matchGrpcAddress">matchGrpcAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.pscAutomatedEndpoints">pscAutomatedEndpoints</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList">VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.serviceAttachment">serviceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpoints">VertexAiIndexEndpointDeployedIndexPrivateEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchGrpcAddress`<sup>Required</sup> <a name="matchGrpcAddress" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.matchGrpcAddress"></a>

```typescript
public readonly matchGrpcAddress: string;
```

- *Type:* string

---

##### `pscAutomatedEndpoints`<sup>Required</sup> <a name="pscAutomatedEndpoints" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.pscAutomatedEndpoints"></a>

```typescript
public readonly pscAutomatedEndpoints: VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList">VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList</a>

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.serviceAttachment"></a>

```typescript
public readonly serviceAttachment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiIndexEndpointDeployedIndexPrivateEndpoints;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpoints">VertexAiIndexEndpointDeployedIndexPrivateEndpoints</a>

---


### VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList <a name="VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer"></a>

```typescript
import { vertexAiIndexEndpointDeployedIndex } from '@cdktf/provider-google'

new vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.get"></a>

```typescript
public get(index: number): VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference <a name="VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer"></a>

```typescript
import { vertexAiIndexEndpointDeployedIndex } from '@cdktf/provider-google'

new vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.matchAddress">matchAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints">VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchAddress`<sup>Required</sup> <a name="matchAddress" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.matchAddress"></a>

```typescript
public readonly matchAddress: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints">VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints</a>

---


### VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference <a name="VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.Initializer"></a>

```typescript
import { vertexAiIndexEndpointDeployedIndex } from '@cdktf/provider-google'

new vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts">VertexAiIndexEndpointDeployedIndexTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VertexAiIndexEndpointDeployedIndexTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vertexAiIndexEndpointDeployedIndex.VertexAiIndexEndpointDeployedIndexTimeouts">VertexAiIndexEndpointDeployedIndexTimeouts</a>

---



