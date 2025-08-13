# `geminiDataSharingWithGoogleSetting` Submodule <a name="`geminiDataSharingWithGoogleSetting` Submodule" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiDataSharingWithGoogleSetting <a name="GeminiDataSharingWithGoogleSetting" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gemini_data_sharing_with_google_setting google_gemini_data_sharing_with_google_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer"></a>

```typescript
import { geminiDataSharingWithGoogleSetting } from '@cdktf/provider-google'

new geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting(scope: Construct, id: string, config: GeminiDataSharingWithGoogleSettingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig">GeminiDataSharingWithGoogleSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig">GeminiDataSharingWithGoogleSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetEnableDataSharing">resetEnableDataSharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetEnablePreviewDataSharing">resetEnablePreviewDataSharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.putTimeouts"></a>

```typescript
public putTimeouts(value: GeminiDataSharingWithGoogleSettingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts">GeminiDataSharingWithGoogleSettingTimeouts</a>

---

##### `resetEnableDataSharing` <a name="resetEnableDataSharing" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetEnableDataSharing"></a>

```typescript
public resetEnableDataSharing(): void
```

##### `resetEnablePreviewDataSharing` <a name="resetEnablePreviewDataSharing" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetEnablePreviewDataSharing"></a>

```typescript
public resetEnablePreviewDataSharing(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GeminiDataSharingWithGoogleSetting resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isConstruct"></a>

```typescript
import { geminiDataSharingWithGoogleSetting } from '@cdktf/provider-google'

geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isTerraformElement"></a>

```typescript
import { geminiDataSharingWithGoogleSetting } from '@cdktf/provider-google'

geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isTerraformResource"></a>

```typescript
import { geminiDataSharingWithGoogleSetting } from '@cdktf/provider-google'

geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.generateConfigForImport"></a>

```typescript
import { geminiDataSharingWithGoogleSetting } from '@cdktf/provider-google'

geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GeminiDataSharingWithGoogleSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GeminiDataSharingWithGoogleSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GeminiDataSharingWithGoogleSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gemini_data_sharing_with_google_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GeminiDataSharingWithGoogleSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference">GeminiDataSharingWithGoogleSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.dataSharingWithGoogleSettingIdInput">dataSharingWithGoogleSettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.enableDataSharingInput">enableDataSharingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.enablePreviewDataSharingInput">enablePreviewDataSharingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts">GeminiDataSharingWithGoogleSettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.dataSharingWithGoogleSettingId">dataSharingWithGoogleSettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.enableDataSharing">enableDataSharing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.enablePreviewDataSharing">enablePreviewDataSharing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.timeouts"></a>

```typescript
public readonly timeouts: GeminiDataSharingWithGoogleSettingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference">GeminiDataSharingWithGoogleSettingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `dataSharingWithGoogleSettingIdInput`<sup>Optional</sup> <a name="dataSharingWithGoogleSettingIdInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.dataSharingWithGoogleSettingIdInput"></a>

```typescript
public readonly dataSharingWithGoogleSettingIdInput: string;
```

- *Type:* string

---

##### `enableDataSharingInput`<sup>Optional</sup> <a name="enableDataSharingInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.enableDataSharingInput"></a>

```typescript
public readonly enableDataSharingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enablePreviewDataSharingInput`<sup>Optional</sup> <a name="enablePreviewDataSharingInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.enablePreviewDataSharingInput"></a>

```typescript
public readonly enablePreviewDataSharingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GeminiDataSharingWithGoogleSettingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts">GeminiDataSharingWithGoogleSettingTimeouts</a>

---

##### `dataSharingWithGoogleSettingId`<sup>Required</sup> <a name="dataSharingWithGoogleSettingId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.dataSharingWithGoogleSettingId"></a>

```typescript
public readonly dataSharingWithGoogleSettingId: string;
```

- *Type:* string

---

##### `enableDataSharing`<sup>Required</sup> <a name="enableDataSharing" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.enableDataSharing"></a>

```typescript
public readonly enableDataSharing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enablePreviewDataSharing`<sup>Required</sup> <a name="enablePreviewDataSharing" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.enablePreviewDataSharing"></a>

```typescript
public readonly enablePreviewDataSharing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiDataSharingWithGoogleSettingConfig <a name="GeminiDataSharingWithGoogleSettingConfig" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.Initializer"></a>

```typescript
import { geminiDataSharingWithGoogleSetting } from '@cdktf/provider-google'

const geminiDataSharingWithGoogleSettingConfig: geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.dataSharingWithGoogleSettingId">dataSharingWithGoogleSettingId</a></code> | <code>string</code> | Id of the Data Sharing With Google Setting. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.enableDataSharing">enableDataSharing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether data sharing should be enabled in GA products. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.enablePreviewDataSharing">enablePreviewDataSharing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether data sharing should be enabled in Preview products. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gemini_data_sharing_with_google_setting#id GeminiDataSharingWithGoogleSetting#id}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gemini_data_sharing_with_google_setting#project GeminiDataSharingWithGoogleSetting#project}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts">GeminiDataSharingWithGoogleSettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataSharingWithGoogleSettingId`<sup>Required</sup> <a name="dataSharingWithGoogleSettingId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.dataSharingWithGoogleSettingId"></a>

```typescript
public readonly dataSharingWithGoogleSettingId: string;
```

- *Type:* string

Id of the Data Sharing With Google Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gemini_data_sharing_with_google_setting#data_sharing_with_google_setting_id GeminiDataSharingWithGoogleSetting#data_sharing_with_google_setting_id}

---

##### `enableDataSharing`<sup>Optional</sup> <a name="enableDataSharing" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.enableDataSharing"></a>

```typescript
public readonly enableDataSharing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether data sharing should be enabled in GA products.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gemini_data_sharing_with_google_setting#enable_data_sharing GeminiDataSharingWithGoogleSetting#enable_data_sharing}

---

##### `enablePreviewDataSharing`<sup>Optional</sup> <a name="enablePreviewDataSharing" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.enablePreviewDataSharing"></a>

```typescript
public readonly enablePreviewDataSharing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether data sharing should be enabled in Preview products.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gemini_data_sharing_with_google_setting#enable_preview_data_sharing GeminiDataSharingWithGoogleSetting#enable_preview_data_sharing}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gemini_data_sharing_with_google_setting#id GeminiDataSharingWithGoogleSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gemini_data_sharing_with_google_setting#labels GeminiDataSharingWithGoogleSetting#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gemini_data_sharing_with_google_setting#location GeminiDataSharingWithGoogleSetting#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gemini_data_sharing_with_google_setting#project GeminiDataSharingWithGoogleSetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GeminiDataSharingWithGoogleSettingTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts">GeminiDataSharingWithGoogleSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gemini_data_sharing_with_google_setting#timeouts GeminiDataSharingWithGoogleSetting#timeouts}

---

### GeminiDataSharingWithGoogleSettingTimeouts <a name="GeminiDataSharingWithGoogleSettingTimeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.Initializer"></a>

```typescript
import { geminiDataSharingWithGoogleSetting } from '@cdktf/provider-google'

const geminiDataSharingWithGoogleSettingTimeouts: geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gemini_data_sharing_with_google_setting#create GeminiDataSharingWithGoogleSetting#create}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gemini_data_sharing_with_google_setting#delete GeminiDataSharingWithGoogleSetting#delete}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gemini_data_sharing_with_google_setting#update GeminiDataSharingWithGoogleSetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gemini_data_sharing_with_google_setting#create GeminiDataSharingWithGoogleSetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gemini_data_sharing_with_google_setting#delete GeminiDataSharingWithGoogleSetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/gemini_data_sharing_with_google_setting#update GeminiDataSharingWithGoogleSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiDataSharingWithGoogleSettingTimeoutsOutputReference <a name="GeminiDataSharingWithGoogleSettingTimeoutsOutputReference" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer"></a>

```typescript
import { geminiDataSharingWithGoogleSetting } from '@cdktf/provider-google'

new geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts">GeminiDataSharingWithGoogleSettingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GeminiDataSharingWithGoogleSettingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts">GeminiDataSharingWithGoogleSettingTimeouts</a>

---



