# `certificateManagerTrustConfig` Submodule <a name="`certificateManagerTrustConfig` Submodule" id="@cdktf/provider-google.certificateManagerTrustConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateManagerTrustConfig <a name="CertificateManagerTrustConfig" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/certificate_manager_trust_config google_certificate_manager_trust_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer"></a>

```typescript
import { certificateManagerTrustConfig } from '@cdktf/provider-google'

new certificateManagerTrustConfig.CertificateManagerTrustConfig(scope: Construct, id: string, config: CertificateManagerTrustConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig">CertificateManagerTrustConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig">CertificateManagerTrustConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putTrustStores">putTrustStores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetTrustStores">resetTrustStores</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: CertificateManagerTrustConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a>

---

##### `putTrustStores` <a name="putTrustStores" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putTrustStores"></a>

```typescript
public putTrustStores(value: IResolvable | CertificateManagerTrustConfigTrustStores[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putTrustStores.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTrustStores` <a name="resetTrustStores" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetTrustStores"></a>

```typescript
public resetTrustStores(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CertificateManagerTrustConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isConstruct"></a>

```typescript
import { certificateManagerTrustConfig } from '@cdktf/provider-google'

certificateManagerTrustConfig.CertificateManagerTrustConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isTerraformElement"></a>

```typescript
import { certificateManagerTrustConfig } from '@cdktf/provider-google'

certificateManagerTrustConfig.CertificateManagerTrustConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isTerraformResource"></a>

```typescript
import { certificateManagerTrustConfig } from '@cdktf/provider-google'

certificateManagerTrustConfig.CertificateManagerTrustConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.generateConfigForImport"></a>

```typescript
import { certificateManagerTrustConfig } from '@cdktf/provider-google'

certificateManagerTrustConfig.CertificateManagerTrustConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CertificateManagerTrustConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CertificateManagerTrustConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CertificateManagerTrustConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/certificate_manager_trust_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CertificateManagerTrustConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference">CertificateManagerTrustConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.trustStores">trustStores</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList">CertificateManagerTrustConfigTrustStoresList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.trustStoresInput">trustStoresInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CertificateManagerTrustConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference">CertificateManagerTrustConfigTimeoutsOutputReference</a>

---

##### `trustStores`<sup>Required</sup> <a name="trustStores" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.trustStores"></a>

```typescript
public readonly trustStores: CertificateManagerTrustConfigTrustStoresList;
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList">CertificateManagerTrustConfigTrustStoresList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CertificateManagerTrustConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a>

---

##### `trustStoresInput`<sup>Optional</sup> <a name="trustStoresInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.trustStoresInput"></a>

```typescript
public readonly trustStoresInput: IResolvable | CertificateManagerTrustConfigTrustStores[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateManagerTrustConfigConfig <a name="CertificateManagerTrustConfigConfig" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.Initializer"></a>

```typescript
import { certificateManagerTrustConfig } from '@cdktf/provider-google'

const certificateManagerTrustConfigConfig: certificateManagerTrustConfig.CertificateManagerTrustConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.location">location</a></code> | <code>string</code> | The trust config location. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.name">name</a></code> | <code>string</code> | A user-defined name of the trust config. Trust config names must be unique globally. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.description">description</a></code> | <code>string</code> | One or more paragraphs of text description of a trust config. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/certificate_manager_trust_config#id CertificateManagerTrustConfig#id}. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of label tags associated with the trust config. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/certificate_manager_trust_config#project CertificateManagerTrustConfig#project}. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.trustStores">trustStores</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>[]</code> | trust_stores block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The trust config location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/certificate_manager_trust_config#location CertificateManagerTrustConfig#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A user-defined name of the trust config. Trust config names must be unique globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/certificate_manager_trust_config#name CertificateManagerTrustConfig#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

One or more paragraphs of text description of a trust config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/certificate_manager_trust_config#description CertificateManagerTrustConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/certificate_manager_trust_config#id CertificateManagerTrustConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of label tags associated with the trust config.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/certificate_manager_trust_config#labels CertificateManagerTrustConfig#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/certificate_manager_trust_config#project CertificateManagerTrustConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CertificateManagerTrustConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/certificate_manager_trust_config#timeouts CertificateManagerTrustConfig#timeouts}

---

##### `trustStores`<sup>Optional</sup> <a name="trustStores" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.trustStores"></a>

```typescript
public readonly trustStores: IResolvable | CertificateManagerTrustConfigTrustStores[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>[]

trust_stores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/certificate_manager_trust_config#trust_stores CertificateManagerTrustConfig#trust_stores}

---

### CertificateManagerTrustConfigTimeouts <a name="CertificateManagerTrustConfigTimeouts" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.Initializer"></a>

```typescript
import { certificateManagerTrustConfig } from '@cdktf/provider-google'

const certificateManagerTrustConfigTimeouts: certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/certificate_manager_trust_config#create CertificateManagerTrustConfig#create}. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/certificate_manager_trust_config#delete CertificateManagerTrustConfig#delete}. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/certificate_manager_trust_config#update CertificateManagerTrustConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/certificate_manager_trust_config#create CertificateManagerTrustConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/certificate_manager_trust_config#delete CertificateManagerTrustConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/certificate_manager_trust_config#update CertificateManagerTrustConfig#update}.

---

### CertificateManagerTrustConfigTrustStores <a name="CertificateManagerTrustConfigTrustStores" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores.Initializer"></a>

```typescript
import { certificateManagerTrustConfig } from '@cdktf/provider-google'

const certificateManagerTrustConfigTrustStores: certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores.property.intermediateCas">intermediateCas</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a>[]</code> | intermediate_cas block. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores.property.trustAnchors">trustAnchors</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a>[]</code> | trust_anchors block. |

---

##### `intermediateCas`<sup>Optional</sup> <a name="intermediateCas" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores.property.intermediateCas"></a>

```typescript
public readonly intermediateCas: IResolvable | CertificateManagerTrustConfigTrustStoresIntermediateCas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a>[]

intermediate_cas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/certificate_manager_trust_config#intermediate_cas CertificateManagerTrustConfig#intermediate_cas}

---

##### `trustAnchors`<sup>Optional</sup> <a name="trustAnchors" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores.property.trustAnchors"></a>

```typescript
public readonly trustAnchors: IResolvable | CertificateManagerTrustConfigTrustStoresTrustAnchors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a>[]

trust_anchors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/certificate_manager_trust_config#trust_anchors CertificateManagerTrustConfig#trust_anchors}

---

### CertificateManagerTrustConfigTrustStoresIntermediateCas <a name="CertificateManagerTrustConfigTrustStoresIntermediateCas" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas.Initializer"></a>

```typescript
import { certificateManagerTrustConfig } from '@cdktf/provider-google'

const certificateManagerTrustConfigTrustStoresIntermediateCas: certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas.property.pemCertificate">pemCertificate</a></code> | <code>string</code> | PEM intermediate certificate used for building up paths for validation. |

---

##### `pemCertificate`<sup>Optional</sup> <a name="pemCertificate" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas.property.pemCertificate"></a>

```typescript
public readonly pemCertificate: string;
```

- *Type:* string

PEM intermediate certificate used for building up paths for validation.

Each certificate provided in PEM format may occupy up to 5kB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/certificate_manager_trust_config#pem_certificate CertificateManagerTrustConfig#pem_certificate}

---

### CertificateManagerTrustConfigTrustStoresTrustAnchors <a name="CertificateManagerTrustConfigTrustStoresTrustAnchors" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors.Initializer"></a>

```typescript
import { certificateManagerTrustConfig } from '@cdktf/provider-google'

const certificateManagerTrustConfigTrustStoresTrustAnchors: certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors.property.pemCertificate">pemCertificate</a></code> | <code>string</code> | PEM root certificate of the PKI used for validation. Each certificate provided in PEM format may occupy up to 5kB. |

---

##### `pemCertificate`<sup>Optional</sup> <a name="pemCertificate" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors.property.pemCertificate"></a>

```typescript
public readonly pemCertificate: string;
```

- *Type:* string

PEM root certificate of the PKI used for validation. Each certificate provided in PEM format may occupy up to 5kB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/certificate_manager_trust_config#pem_certificate CertificateManagerTrustConfig#pem_certificate}

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateManagerTrustConfigTimeoutsOutputReference <a name="CertificateManagerTrustConfigTimeoutsOutputReference" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { certificateManagerTrustConfig } from '@cdktf/provider-google'

new certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificateManagerTrustConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a>

---


### CertificateManagerTrustConfigTrustStoresIntermediateCasList <a name="CertificateManagerTrustConfigTrustStoresIntermediateCasList" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer"></a>

```typescript
import { certificateManagerTrustConfig } from '@cdktf/provider-google'

new certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.get"></a>

```typescript
public get(index: number): CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificateManagerTrustConfigTrustStoresIntermediateCas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a>[]

---


### CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference <a name="CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer"></a>

```typescript
import { certificateManagerTrustConfig } from '@cdktf/provider-google'

new certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resetPemCertificate">resetPemCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPemCertificate` <a name="resetPemCertificate" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resetPemCertificate"></a>

```typescript
public resetPemCertificate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.pemCertificateInput">pemCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.pemCertificate">pemCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pemCertificateInput`<sup>Optional</sup> <a name="pemCertificateInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.pemCertificateInput"></a>

```typescript
public readonly pemCertificateInput: string;
```

- *Type:* string

---

##### `pemCertificate`<sup>Required</sup> <a name="pemCertificate" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.pemCertificate"></a>

```typescript
public readonly pemCertificate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificateManagerTrustConfigTrustStoresIntermediateCas;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a>

---


### CertificateManagerTrustConfigTrustStoresList <a name="CertificateManagerTrustConfigTrustStoresList" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer"></a>

```typescript
import { certificateManagerTrustConfig } from '@cdktf/provider-google'

new certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.get"></a>

```typescript
public get(index: number): CertificateManagerTrustConfigTrustStoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificateManagerTrustConfigTrustStores[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>[]

---


### CertificateManagerTrustConfigTrustStoresOutputReference <a name="CertificateManagerTrustConfigTrustStoresOutputReference" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer"></a>

```typescript
import { certificateManagerTrustConfig } from '@cdktf/provider-google'

new certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.putIntermediateCas">putIntermediateCas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.putTrustAnchors">putTrustAnchors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resetIntermediateCas">resetIntermediateCas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resetTrustAnchors">resetTrustAnchors</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIntermediateCas` <a name="putIntermediateCas" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.putIntermediateCas"></a>

```typescript
public putIntermediateCas(value: IResolvable | CertificateManagerTrustConfigTrustStoresIntermediateCas[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.putIntermediateCas.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a>[]

---

##### `putTrustAnchors` <a name="putTrustAnchors" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.putTrustAnchors"></a>

```typescript
public putTrustAnchors(value: IResolvable | CertificateManagerTrustConfigTrustStoresTrustAnchors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.putTrustAnchors.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a>[]

---

##### `resetIntermediateCas` <a name="resetIntermediateCas" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resetIntermediateCas"></a>

```typescript
public resetIntermediateCas(): void
```

##### `resetTrustAnchors` <a name="resetTrustAnchors" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resetTrustAnchors"></a>

```typescript
public resetTrustAnchors(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.intermediateCas">intermediateCas</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList">CertificateManagerTrustConfigTrustStoresIntermediateCasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.trustAnchors">trustAnchors</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList">CertificateManagerTrustConfigTrustStoresTrustAnchorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.intermediateCasInput">intermediateCasInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.trustAnchorsInput">trustAnchorsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intermediateCas`<sup>Required</sup> <a name="intermediateCas" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.intermediateCas"></a>

```typescript
public readonly intermediateCas: CertificateManagerTrustConfigTrustStoresIntermediateCasList;
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList">CertificateManagerTrustConfigTrustStoresIntermediateCasList</a>

---

##### `trustAnchors`<sup>Required</sup> <a name="trustAnchors" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.trustAnchors"></a>

```typescript
public readonly trustAnchors: CertificateManagerTrustConfigTrustStoresTrustAnchorsList;
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList">CertificateManagerTrustConfigTrustStoresTrustAnchorsList</a>

---

##### `intermediateCasInput`<sup>Optional</sup> <a name="intermediateCasInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.intermediateCasInput"></a>

```typescript
public readonly intermediateCasInput: IResolvable | CertificateManagerTrustConfigTrustStoresIntermediateCas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a>[]

---

##### `trustAnchorsInput`<sup>Optional</sup> <a name="trustAnchorsInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.trustAnchorsInput"></a>

```typescript
public readonly trustAnchorsInput: IResolvable | CertificateManagerTrustConfigTrustStoresTrustAnchors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificateManagerTrustConfigTrustStores;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>

---


### CertificateManagerTrustConfigTrustStoresTrustAnchorsList <a name="CertificateManagerTrustConfigTrustStoresTrustAnchorsList" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer"></a>

```typescript
import { certificateManagerTrustConfig } from '@cdktf/provider-google'

new certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.get"></a>

```typescript
public get(index: number): CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificateManagerTrustConfigTrustStoresTrustAnchors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a>[]

---


### CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference <a name="CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer"></a>

```typescript
import { certificateManagerTrustConfig } from '@cdktf/provider-google'

new certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resetPemCertificate">resetPemCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPemCertificate` <a name="resetPemCertificate" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resetPemCertificate"></a>

```typescript
public resetPemCertificate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.pemCertificateInput">pemCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.pemCertificate">pemCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pemCertificateInput`<sup>Optional</sup> <a name="pemCertificateInput" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.pemCertificateInput"></a>

```typescript
public readonly pemCertificateInput: string;
```

- *Type:* string

---

##### `pemCertificate`<sup>Required</sup> <a name="pemCertificate" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.pemCertificate"></a>

```typescript
public readonly pemCertificate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificateManagerTrustConfigTrustStoresTrustAnchors;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a>

---



