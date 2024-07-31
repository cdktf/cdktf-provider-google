# `vertexAiFeatureOnlineStoreFeatureview` Submodule <a name="`vertexAiFeatureOnlineStoreFeatureview` Submodule" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiFeatureOnlineStoreFeatureview <a name="VertexAiFeatureOnlineStoreFeatureview" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview google_vertex_ai_feature_online_store_featureview}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google'

new vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview(scope: Construct, id: string, config: VertexAiFeatureOnlineStoreFeatureviewConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig">VertexAiFeatureOnlineStoreFeatureviewConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig">VertexAiFeatureOnlineStoreFeatureviewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putBigQuerySource">putBigQuerySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putFeatureRegistrySource">putFeatureRegistrySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putSyncConfig">putSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetBigQuerySource">resetBigQuerySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetFeatureRegistrySource">resetFeatureRegistrySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetSyncConfig">resetSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBigQuerySource` <a name="putBigQuerySource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putBigQuerySource"></a>

```typescript
public putBigQuerySource(value: VertexAiFeatureOnlineStoreFeatureviewBigQuerySource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putBigQuerySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource">VertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a>

---

##### `putFeatureRegistrySource` <a name="putFeatureRegistrySource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putFeatureRegistrySource"></a>

```typescript
public putFeatureRegistrySource(value: VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putFeatureRegistrySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a>

---

##### `putSyncConfig` <a name="putSyncConfig" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putSyncConfig"></a>

```typescript
public putSyncConfig(value: VertexAiFeatureOnlineStoreFeatureviewSyncConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putSyncConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig">VertexAiFeatureOnlineStoreFeatureviewSyncConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putTimeouts"></a>

```typescript
public putTimeouts(value: VertexAiFeatureOnlineStoreFeatureviewTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts">VertexAiFeatureOnlineStoreFeatureviewTimeouts</a>

---

##### `resetBigQuerySource` <a name="resetBigQuerySource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetBigQuerySource"></a>

```typescript
public resetBigQuerySource(): void
```

##### `resetFeatureRegistrySource` <a name="resetFeatureRegistrySource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetFeatureRegistrySource"></a>

```typescript
public resetFeatureRegistrySource(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSyncConfig` <a name="resetSyncConfig" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetSyncConfig"></a>

```typescript
public resetSyncConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VertexAiFeatureOnlineStoreFeatureview resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isConstruct"></a>

```typescript
import { vertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google'

vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isTerraformElement"></a>

```typescript
import { vertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google'

vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isTerraformResource"></a>

```typescript
import { vertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google'

vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.generateConfigForImport"></a>

```typescript
import { vertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google'

vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VertexAiFeatureOnlineStoreFeatureview resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VertexAiFeatureOnlineStoreFeatureview to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VertexAiFeatureOnlineStoreFeatureview that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VertexAiFeatureOnlineStoreFeatureview to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.bigQuerySource">bigQuerySource</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference">VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.featureRegistrySource">featureRegistrySource</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.syncConfig">syncConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference">VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference">VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.bigQuerySourceInput">bigQuerySourceInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource">VertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.featureOnlineStoreInput">featureOnlineStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.featureRegistrySourceInput">featureRegistrySourceInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.syncConfigInput">syncConfigInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig">VertexAiFeatureOnlineStoreFeatureviewSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts">VertexAiFeatureOnlineStoreFeatureviewTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.featureOnlineStore">featureOnlineStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bigQuerySource`<sup>Required</sup> <a name="bigQuerySource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.bigQuerySource"></a>

```typescript
public readonly bigQuerySource: VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference">VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `featureRegistrySource`<sup>Required</sup> <a name="featureRegistrySource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.featureRegistrySource"></a>

```typescript
public readonly featureRegistrySource: VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference</a>

---

##### `syncConfig`<sup>Required</sup> <a name="syncConfig" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.syncConfig"></a>

```typescript
public readonly syncConfig: VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference">VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.timeouts"></a>

```typescript
public readonly timeouts: VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference">VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `bigQuerySourceInput`<sup>Optional</sup> <a name="bigQuerySourceInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.bigQuerySourceInput"></a>

```typescript
public readonly bigQuerySourceInput: VertexAiFeatureOnlineStoreFeatureviewBigQuerySource;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource">VertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a>

---

##### `featureOnlineStoreInput`<sup>Optional</sup> <a name="featureOnlineStoreInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.featureOnlineStoreInput"></a>

```typescript
public readonly featureOnlineStoreInput: string;
```

- *Type:* string

---

##### `featureRegistrySourceInput`<sup>Optional</sup> <a name="featureRegistrySourceInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.featureRegistrySourceInput"></a>

```typescript
public readonly featureRegistrySourceInput: VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `syncConfigInput`<sup>Optional</sup> <a name="syncConfigInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.syncConfigInput"></a>

```typescript
public readonly syncConfigInput: VertexAiFeatureOnlineStoreFeatureviewSyncConfig;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig">VertexAiFeatureOnlineStoreFeatureviewSyncConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VertexAiFeatureOnlineStoreFeatureviewTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts">VertexAiFeatureOnlineStoreFeatureviewTimeouts</a>

---

##### `featureOnlineStore`<sup>Required</sup> <a name="featureOnlineStore" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.featureOnlineStore"></a>

```typescript
public readonly featureOnlineStore: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureview.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiFeatureOnlineStoreFeatureviewBigQuerySource <a name="VertexAiFeatureOnlineStoreFeatureviewBigQuerySource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google'

const vertexAiFeatureOnlineStoreFeatureviewBigQuerySource: vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource.property.entityIdColumns">entityIdColumns</a></code> | <code>string[]</code> | Columns to construct entityId / row keys. Start by supporting 1 only. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource.property.uri">uri</a></code> | <code>string</code> | The BigQuery view URI that will be materialized on each sync trigger based on FeatureView.SyncConfig. |

---

##### `entityIdColumns`<sup>Required</sup> <a name="entityIdColumns" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource.property.entityIdColumns"></a>

```typescript
public readonly entityIdColumns: string[];
```

- *Type:* string[]

Columns to construct entityId / row keys. Start by supporting 1 only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview#entity_id_columns VertexAiFeatureOnlineStoreFeatureview#entity_id_columns}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The BigQuery view URI that will be materialized on each sync trigger based on FeatureView.SyncConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview#uri VertexAiFeatureOnlineStoreFeatureview#uri}

---

### VertexAiFeatureOnlineStoreFeatureviewConfig <a name="VertexAiFeatureOnlineStoreFeatureviewConfig" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google'

const vertexAiFeatureOnlineStoreFeatureviewConfig: vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.featureOnlineStore">featureOnlineStore</a></code> | <code>string</code> | The name of the FeatureOnlineStore to use for the featureview. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.region">region</a></code> | <code>string</code> | The region for the resource. It should be the same as the featureonlinestore region. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.bigQuerySource">bigQuerySource</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource">VertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a></code> | big_query_source block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.featureRegistrySource">featureRegistrySource</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a></code> | feature_registry_source block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview#id VertexAiFeatureOnlineStoreFeatureview#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A set of key/value label pairs to assign to this FeatureView. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.name">name</a></code> | <code>string</code> | Name of the FeatureView. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview#project VertexAiFeatureOnlineStoreFeatureview#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.syncConfig">syncConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig">VertexAiFeatureOnlineStoreFeatureviewSyncConfig</a></code> | sync_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts">VertexAiFeatureOnlineStoreFeatureviewTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `featureOnlineStore`<sup>Required</sup> <a name="featureOnlineStore" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.featureOnlineStore"></a>

```typescript
public readonly featureOnlineStore: string;
```

- *Type:* string

The name of the FeatureOnlineStore to use for the featureview.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview#feature_online_store VertexAiFeatureOnlineStoreFeatureview#feature_online_store}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region for the resource. It should be the same as the featureonlinestore region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview#region VertexAiFeatureOnlineStoreFeatureview#region}

---

##### `bigQuerySource`<sup>Optional</sup> <a name="bigQuerySource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.bigQuerySource"></a>

```typescript
public readonly bigQuerySource: VertexAiFeatureOnlineStoreFeatureviewBigQuerySource;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource">VertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a>

big_query_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview#big_query_source VertexAiFeatureOnlineStoreFeatureview#big_query_source}

---

##### `featureRegistrySource`<sup>Optional</sup> <a name="featureRegistrySource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.featureRegistrySource"></a>

```typescript
public readonly featureRegistrySource: VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a>

feature_registry_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview#feature_registry_source VertexAiFeatureOnlineStoreFeatureview#feature_registry_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview#id VertexAiFeatureOnlineStoreFeatureview#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of key/value label pairs to assign to this FeatureView.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview#labels VertexAiFeatureOnlineStoreFeatureview#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the FeatureView.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview#name VertexAiFeatureOnlineStoreFeatureview#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview#project VertexAiFeatureOnlineStoreFeatureview#project}.

---

##### `syncConfig`<sup>Optional</sup> <a name="syncConfig" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.syncConfig"></a>

```typescript
public readonly syncConfig: VertexAiFeatureOnlineStoreFeatureviewSyncConfig;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig">VertexAiFeatureOnlineStoreFeatureviewSyncConfig</a>

sync_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview#sync_config VertexAiFeatureOnlineStoreFeatureview#sync_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VertexAiFeatureOnlineStoreFeatureviewTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts">VertexAiFeatureOnlineStoreFeatureviewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview#timeouts VertexAiFeatureOnlineStoreFeatureview#timeouts}

---

### VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource <a name="VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google'

const vertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource: vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource.property.featureGroups">featureGroups</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a>[]</code> | feature_groups block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource.property.projectNumber">projectNumber</a></code> | <code>string</code> | The project number of the parent project of the feature Groups. |

---

##### `featureGroups`<sup>Required</sup> <a name="featureGroups" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource.property.featureGroups"></a>

```typescript
public readonly featureGroups: IResolvable | VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a>[]

feature_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview#feature_groups VertexAiFeatureOnlineStoreFeatureview#feature_groups}

---

##### `projectNumber`<sup>Optional</sup> <a name="projectNumber" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource.property.projectNumber"></a>

```typescript
public readonly projectNumber: string;
```

- *Type:* string

The project number of the parent project of the feature Groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview#project_number VertexAiFeatureOnlineStoreFeatureview#project_number}

---

### VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups <a name="VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google'

const vertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups: vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups.property.featureGroupId">featureGroupId</a></code> | <code>string</code> | Identifier of the feature group. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups.property.featureIds">featureIds</a></code> | <code>string[]</code> | Identifiers of features under the feature group. |

---

##### `featureGroupId`<sup>Required</sup> <a name="featureGroupId" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups.property.featureGroupId"></a>

```typescript
public readonly featureGroupId: string;
```

- *Type:* string

Identifier of the feature group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview#feature_group_id VertexAiFeatureOnlineStoreFeatureview#feature_group_id}

---

##### `featureIds`<sup>Required</sup> <a name="featureIds" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups.property.featureIds"></a>

```typescript
public readonly featureIds: string[];
```

- *Type:* string[]

Identifiers of features under the feature group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview#feature_ids VertexAiFeatureOnlineStoreFeatureview#feature_ids}

---

### VertexAiFeatureOnlineStoreFeatureviewSyncConfig <a name="VertexAiFeatureOnlineStoreFeatureviewSyncConfig" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google'

const vertexAiFeatureOnlineStoreFeatureviewSyncConfig: vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig.property.cron">cron</a></code> | <code>string</code> | Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". |

---

##### `cron`<sup>Optional</sup> <a name="cron" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig.property.cron"></a>

```typescript
public readonly cron: string;
```

- *Type:* string

Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview#cron VertexAiFeatureOnlineStoreFeatureview#cron}

---

### VertexAiFeatureOnlineStoreFeatureviewTimeouts <a name="VertexAiFeatureOnlineStoreFeatureviewTimeouts" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google'

const vertexAiFeatureOnlineStoreFeatureviewTimeouts: vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview#create VertexAiFeatureOnlineStoreFeatureview#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview#delete VertexAiFeatureOnlineStoreFeatureview#delete}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview#update VertexAiFeatureOnlineStoreFeatureview#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview#create VertexAiFeatureOnlineStoreFeatureview#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview#delete VertexAiFeatureOnlineStoreFeatureview#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_feature_online_store_featureview#update VertexAiFeatureOnlineStoreFeatureview#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference <a name="VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google'

new vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.entityIdColumnsInput">entityIdColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.entityIdColumns">entityIdColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource">VertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityIdColumnsInput`<sup>Optional</sup> <a name="entityIdColumnsInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.entityIdColumnsInput"></a>

```typescript
public readonly entityIdColumnsInput: string[];
```

- *Type:* string[]

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `entityIdColumns`<sup>Required</sup> <a name="entityIdColumns" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.entityIdColumns"></a>

```typescript
public readonly entityIdColumns: string[];
```

- *Type:* string[]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiFeatureOnlineStoreFeatureviewBigQuerySource;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewBigQuerySource">VertexAiFeatureOnlineStoreFeatureviewBigQuerySource</a>

---


### VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList <a name="VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google'

new vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.get"></a>

```typescript
public get(index: number): VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a>[]

---


### VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference <a name="VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google'

new vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureGroupIdInput">featureGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureIdsInput">featureIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureGroupId">featureGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureIds">featureIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `featureGroupIdInput`<sup>Optional</sup> <a name="featureGroupIdInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureGroupIdInput"></a>

```typescript
public readonly featureGroupIdInput: string;
```

- *Type:* string

---

##### `featureIdsInput`<sup>Optional</sup> <a name="featureIdsInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureIdsInput"></a>

```typescript
public readonly featureIdsInput: string[];
```

- *Type:* string[]

---

##### `featureGroupId`<sup>Required</sup> <a name="featureGroupId" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureGroupId"></a>

```typescript
public readonly featureGroupId: string;
```

- *Type:* string

---

##### `featureIds`<sup>Required</sup> <a name="featureIds" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.featureIds"></a>

```typescript
public readonly featureIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a>

---


### VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference <a name="VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google'

new vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.putFeatureGroups">putFeatureGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.resetProjectNumber">resetProjectNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFeatureGroups` <a name="putFeatureGroups" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.putFeatureGroups"></a>

```typescript
public putFeatureGroups(value: IResolvable | VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.putFeatureGroups.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a>[]

---

##### `resetProjectNumber` <a name="resetProjectNumber" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.resetProjectNumber"></a>

```typescript
public resetProjectNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.featureGroups">featureGroups</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.featureGroupsInput">featureGroupsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.projectNumberInput">projectNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.projectNumber">projectNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `featureGroups`<sup>Required</sup> <a name="featureGroups" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.featureGroups"></a>

```typescript
public readonly featureGroups: VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroupsList</a>

---

##### `featureGroupsInput`<sup>Optional</sup> <a name="featureGroupsInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.featureGroupsInput"></a>

```typescript
public readonly featureGroupsInput: IResolvable | VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroups</a>[]

---

##### `projectNumberInput`<sup>Optional</sup> <a name="projectNumberInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.projectNumberInput"></a>

```typescript
public readonly projectNumberInput: string;
```

- *Type:* string

---

##### `projectNumber`<sup>Required</sup> <a name="projectNumber" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.projectNumber"></a>

```typescript
public readonly projectNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource">VertexAiFeatureOnlineStoreFeatureviewFeatureRegistrySource</a>

---


### VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference <a name="VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google'

new vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.resetCron">resetCron</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCron` <a name="resetCron" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.resetCron"></a>

```typescript
public resetCron(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.cronInput">cronInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.cron">cron</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig">VertexAiFeatureOnlineStoreFeatureviewSyncConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cronInput`<sup>Optional</sup> <a name="cronInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.cronInput"></a>

```typescript
public readonly cronInput: string;
```

- *Type:* string

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.cron"></a>

```typescript
public readonly cron: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiFeatureOnlineStoreFeatureviewSyncConfig;
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewSyncConfig">VertexAiFeatureOnlineStoreFeatureviewSyncConfig</a>

---


### VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference <a name="VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStoreFeatureview } from '@cdktf/provider-google'

new vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts">VertexAiFeatureOnlineStoreFeatureviewTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VertexAiFeatureOnlineStoreFeatureviewTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStoreFeatureview.VertexAiFeatureOnlineStoreFeatureviewTimeouts">VertexAiFeatureOnlineStoreFeatureviewTimeouts</a>

---



