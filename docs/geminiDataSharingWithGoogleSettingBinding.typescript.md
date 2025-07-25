# `geminiDataSharingWithGoogleSettingBinding` Submodule <a name="`geminiDataSharingWithGoogleSettingBinding` Submodule" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiDataSharingWithGoogleSettingBinding <a name="GeminiDataSharingWithGoogleSettingBinding" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_data_sharing_with_google_setting_binding google_gemini_data_sharing_with_google_setting_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer"></a>

```typescript
import { geminiDataSharingWithGoogleSettingBinding } from '@cdktf/provider-google'

new geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding(scope: Construct, id: string, config: GeminiDataSharingWithGoogleSettingBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig">GeminiDataSharingWithGoogleSettingBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig">GeminiDataSharingWithGoogleSettingBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetProduct">resetProduct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.putTimeouts"></a>

```typescript
public putTimeouts(value: GeminiDataSharingWithGoogleSettingBindingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts">GeminiDataSharingWithGoogleSettingBindingTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProduct` <a name="resetProduct" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetProduct"></a>

```typescript
public resetProduct(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GeminiDataSharingWithGoogleSettingBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isConstruct"></a>

```typescript
import { geminiDataSharingWithGoogleSettingBinding } from '@cdktf/provider-google'

geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isTerraformElement"></a>

```typescript
import { geminiDataSharingWithGoogleSettingBinding } from '@cdktf/provider-google'

geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isTerraformResource"></a>

```typescript
import { geminiDataSharingWithGoogleSettingBinding } from '@cdktf/provider-google'

geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.generateConfigForImport"></a>

```typescript
import { geminiDataSharingWithGoogleSettingBinding } from '@cdktf/provider-google'

geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GeminiDataSharingWithGoogleSettingBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GeminiDataSharingWithGoogleSettingBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GeminiDataSharingWithGoogleSettingBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_data_sharing_with_google_setting_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GeminiDataSharingWithGoogleSettingBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference">GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.dataSharingWithGoogleSettingIdInput">dataSharingWithGoogleSettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.productInput">productInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.settingBindingIdInput">settingBindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts">GeminiDataSharingWithGoogleSettingBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.dataSharingWithGoogleSettingId">dataSharingWithGoogleSettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.product">product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.settingBindingId">settingBindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.target">target</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.timeouts"></a>

```typescript
public readonly timeouts: GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference">GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `dataSharingWithGoogleSettingIdInput`<sup>Optional</sup> <a name="dataSharingWithGoogleSettingIdInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.dataSharingWithGoogleSettingIdInput"></a>

```typescript
public readonly dataSharingWithGoogleSettingIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.productInput"></a>

```typescript
public readonly productInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `settingBindingIdInput`<sup>Optional</sup> <a name="settingBindingIdInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.settingBindingIdInput"></a>

```typescript
public readonly settingBindingIdInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GeminiDataSharingWithGoogleSettingBindingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts">GeminiDataSharingWithGoogleSettingBindingTimeouts</a>

---

##### `dataSharingWithGoogleSettingId`<sup>Required</sup> <a name="dataSharingWithGoogleSettingId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.dataSharingWithGoogleSettingId"></a>

```typescript
public readonly dataSharingWithGoogleSettingId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `settingBindingId`<sup>Required</sup> <a name="settingBindingId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.settingBindingId"></a>

```typescript
public readonly settingBindingId: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiDataSharingWithGoogleSettingBindingConfig <a name="GeminiDataSharingWithGoogleSettingBindingConfig" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.Initializer"></a>

```typescript
import { geminiDataSharingWithGoogleSettingBinding } from '@cdktf/provider-google'

const geminiDataSharingWithGoogleSettingBindingConfig: geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.dataSharingWithGoogleSettingId">dataSharingWithGoogleSettingId</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.settingBindingId">settingBindingId</a></code> | <code>string</code> | Required. Id of the setting binding. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.target">target</a></code> | <code>string</code> | Target of the binding. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_data_sharing_with_google_setting_binding#id GeminiDataSharingWithGoogleSettingBinding#id}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.product">product</a></code> | <code>string</code> | Product type of the setting binding. Values include GEMINI_IN_BIGQUERY, GEMINI_CLOUD_ASSIST, etc. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.dataSharingWithGoogleSettings.settingBindings) for a complete list. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_data_sharing_with_google_setting_binding#project GeminiDataSharingWithGoogleSettingBinding#project}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts">GeminiDataSharingWithGoogleSettingBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataSharingWithGoogleSettingId`<sup>Required</sup> <a name="dataSharingWithGoogleSettingId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.dataSharingWithGoogleSettingId"></a>

```typescript
public readonly dataSharingWithGoogleSettingId: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_data_sharing_with_google_setting_binding#data_sharing_with_google_setting_id GeminiDataSharingWithGoogleSettingBinding#data_sharing_with_google_setting_id}

---

##### `settingBindingId`<sup>Required</sup> <a name="settingBindingId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.settingBindingId"></a>

```typescript
public readonly settingBindingId: string;
```

- *Type:* string

Required. Id of the setting binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_data_sharing_with_google_setting_binding#setting_binding_id GeminiDataSharingWithGoogleSettingBinding#setting_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Target of the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_data_sharing_with_google_setting_binding#target GeminiDataSharingWithGoogleSettingBinding#target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_data_sharing_with_google_setting_binding#id GeminiDataSharingWithGoogleSettingBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_data_sharing_with_google_setting_binding#labels GeminiDataSharingWithGoogleSettingBinding#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_data_sharing_with_google_setting_binding#location GeminiDataSharingWithGoogleSettingBinding#location}

---

##### `product`<sup>Optional</sup> <a name="product" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

Product type of the setting binding. Values include GEMINI_IN_BIGQUERY, GEMINI_CLOUD_ASSIST, etc. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.dataSharingWithGoogleSettings.settingBindings) for a complete list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_data_sharing_with_google_setting_binding#product GeminiDataSharingWithGoogleSettingBinding#product}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_data_sharing_with_google_setting_binding#project GeminiDataSharingWithGoogleSettingBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GeminiDataSharingWithGoogleSettingBindingTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts">GeminiDataSharingWithGoogleSettingBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_data_sharing_with_google_setting_binding#timeouts GeminiDataSharingWithGoogleSettingBinding#timeouts}

---

### GeminiDataSharingWithGoogleSettingBindingTimeouts <a name="GeminiDataSharingWithGoogleSettingBindingTimeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts.Initializer"></a>

```typescript
import { geminiDataSharingWithGoogleSettingBinding } from '@cdktf/provider-google'

const geminiDataSharingWithGoogleSettingBindingTimeouts: geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_data_sharing_with_google_setting_binding#create GeminiDataSharingWithGoogleSettingBinding#create}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_data_sharing_with_google_setting_binding#delete GeminiDataSharingWithGoogleSettingBinding#delete}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_data_sharing_with_google_setting_binding#update GeminiDataSharingWithGoogleSettingBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_data_sharing_with_google_setting_binding#create GeminiDataSharingWithGoogleSettingBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_data_sharing_with_google_setting_binding#delete GeminiDataSharingWithGoogleSettingBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_data_sharing_with_google_setting_binding#update GeminiDataSharingWithGoogleSettingBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference <a name="GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.Initializer"></a>

```typescript
import { geminiDataSharingWithGoogleSettingBinding } from '@cdktf/provider-google'

new geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts">GeminiDataSharingWithGoogleSettingBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GeminiDataSharingWithGoogleSettingBindingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts">GeminiDataSharingWithGoogleSettingBindingTimeouts</a>

---



