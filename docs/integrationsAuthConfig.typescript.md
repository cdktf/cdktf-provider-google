# `integrationsAuthConfig` Submodule <a name="`integrationsAuthConfig` Submodule" id="@cdktf/provider-google.integrationsAuthConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationsAuthConfig <a name="IntegrationsAuthConfig" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config google_integrations_auth_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

new integrationsAuthConfig.IntegrationsAuthConfig(scope: Construct, id: string, config: IntegrationsAuthConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig">IntegrationsAuthConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig">IntegrationsAuthConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.putClientCertificate">putClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.putDecryptedCredential">putDecryptedCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetDecryptedCredential">resetDecryptedCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetExpiryNotificationDuration">resetExpiryNotificationDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetOverrideValidTime">resetOverrideValidTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetVisibility">resetVisibility</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClientCertificate` <a name="putClientCertificate" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.putClientCertificate"></a>

```typescript
public putClientCertificate(value: IntegrationsAuthConfigClientCertificate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.putClientCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate">IntegrationsAuthConfigClientCertificate</a>

---

##### `putDecryptedCredential` <a name="putDecryptedCredential" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.putDecryptedCredential"></a>

```typescript
public putDecryptedCredential(value: IntegrationsAuthConfigDecryptedCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.putDecryptedCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential">IntegrationsAuthConfigDecryptedCredential</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: IntegrationsAuthConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts">IntegrationsAuthConfigTimeouts</a>

---

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetClientCertificate"></a>

```typescript
public resetClientCertificate(): void
```

##### `resetDecryptedCredential` <a name="resetDecryptedCredential" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetDecryptedCredential"></a>

```typescript
public resetDecryptedCredential(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExpiryNotificationDuration` <a name="resetExpiryNotificationDuration" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetExpiryNotificationDuration"></a>

```typescript
public resetExpiryNotificationDuration(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOverrideValidTime` <a name="resetOverrideValidTime" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetOverrideValidTime"></a>

```typescript
public resetOverrideValidTime(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVisibility` <a name="resetVisibility" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetVisibility"></a>

```typescript
public resetVisibility(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationsAuthConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.isConstruct"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

integrationsAuthConfig.IntegrationsAuthConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.isTerraformElement"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

integrationsAuthConfig.IntegrationsAuthConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.isTerraformResource"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

integrationsAuthConfig.IntegrationsAuthConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.generateConfigForImport"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

integrationsAuthConfig.IntegrationsAuthConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IntegrationsAuthConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationsAuthConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationsAuthConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationsAuthConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.clientCertificate">clientCertificate</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference">IntegrationsAuthConfigClientCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.creatorEmail">creatorEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.credentialType">credentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.decryptedCredential">decryptedCredential</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference">IntegrationsAuthConfigDecryptedCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.encryptedCredential">encryptedCredential</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.lastModifierEmail">lastModifierEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference">IntegrationsAuthConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.validTime">validTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.clientCertificateInput">clientCertificateInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate">IntegrationsAuthConfigClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.decryptedCredentialInput">decryptedCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential">IntegrationsAuthConfigDecryptedCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.expiryNotificationDurationInput">expiryNotificationDurationInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.overrideValidTimeInput">overrideValidTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts">IntegrationsAuthConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.visibilityInput">visibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.expiryNotificationDuration">expiryNotificationDuration</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.overrideValidTime">overrideValidTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: IntegrationsAuthConfigClientCertificateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference">IntegrationsAuthConfigClientCertificateOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creatorEmail`<sup>Required</sup> <a name="creatorEmail" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.creatorEmail"></a>

```typescript
public readonly creatorEmail: string;
```

- *Type:* string

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

---

##### `decryptedCredential`<sup>Required</sup> <a name="decryptedCredential" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.decryptedCredential"></a>

```typescript
public readonly decryptedCredential: IntegrationsAuthConfigDecryptedCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference">IntegrationsAuthConfigDecryptedCredentialOutputReference</a>

---

##### `encryptedCredential`<sup>Required</sup> <a name="encryptedCredential" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.encryptedCredential"></a>

```typescript
public readonly encryptedCredential: string;
```

- *Type:* string

---

##### `lastModifierEmail`<sup>Required</sup> <a name="lastModifierEmail" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.lastModifierEmail"></a>

```typescript
public readonly lastModifierEmail: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IntegrationsAuthConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference">IntegrationsAuthConfigTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `validTime`<sup>Required</sup> <a name="validTime" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.validTime"></a>

```typescript
public readonly validTime: string;
```

- *Type:* string

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.clientCertificateInput"></a>

```typescript
public readonly clientCertificateInput: IntegrationsAuthConfigClientCertificate;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate">IntegrationsAuthConfigClientCertificate</a>

---

##### `decryptedCredentialInput`<sup>Optional</sup> <a name="decryptedCredentialInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.decryptedCredentialInput"></a>

```typescript
public readonly decryptedCredentialInput: IntegrationsAuthConfigDecryptedCredential;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential">IntegrationsAuthConfigDecryptedCredential</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `expiryNotificationDurationInput`<sup>Optional</sup> <a name="expiryNotificationDurationInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.expiryNotificationDurationInput"></a>

```typescript
public readonly expiryNotificationDurationInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `overrideValidTimeInput`<sup>Optional</sup> <a name="overrideValidTimeInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.overrideValidTimeInput"></a>

```typescript
public readonly overrideValidTimeInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IntegrationsAuthConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts">IntegrationsAuthConfigTimeouts</a>

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.visibilityInput"></a>

```typescript
public readonly visibilityInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `expiryNotificationDuration`<sup>Required</sup> <a name="expiryNotificationDuration" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.expiryNotificationDuration"></a>

```typescript
public readonly expiryNotificationDuration: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `overrideValidTime`<sup>Required</sup> <a name="overrideValidTime" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.overrideValidTime"></a>

```typescript
public readonly overrideValidTime: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationsAuthConfigClientCertificate <a name="IntegrationsAuthConfigClientCertificate" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

const integrationsAuthConfigClientCertificate: integrationsAuthConfig.IntegrationsAuthConfigClientCertificate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate.property.encryptedPrivateKey">encryptedPrivateKey</a></code> | <code>string</code> | The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate.property.sslCertificate">sslCertificate</a></code> | <code>string</code> | The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate.property.passphrase">passphrase</a></code> | <code>string</code> | 'passphrase' should be left unset if private key is not encrypted. |

---

##### `encryptedPrivateKey`<sup>Required</sup> <a name="encryptedPrivateKey" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate.property.encryptedPrivateKey"></a>

```typescript
public readonly encryptedPrivateKey: string;
```

- *Type:* string

The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#encrypted_private_key IntegrationsAuthConfig#encrypted_private_key}

---

##### `sslCertificate`<sup>Required</sup> <a name="sslCertificate" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate.property.sslCertificate"></a>

```typescript
public readonly sslCertificate: string;
```

- *Type:* string

The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#ssl_certificate IntegrationsAuthConfig#ssl_certificate}

---

##### `passphrase`<sup>Optional</sup> <a name="passphrase" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate.property.passphrase"></a>

```typescript
public readonly passphrase: string;
```

- *Type:* string

'passphrase' should be left unset if private key is not encrypted.

Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#passphrase IntegrationsAuthConfig#passphrase}

---

### IntegrationsAuthConfigConfig <a name="IntegrationsAuthConfigConfig" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

const integrationsAuthConfigConfig: integrationsAuthConfig.IntegrationsAuthConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.displayName">displayName</a></code> | <code>string</code> | The name of the auth config. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.location">location</a></code> | <code>string</code> | Location in which client needs to be provisioned. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.clientCertificate">clientCertificate</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate">IntegrationsAuthConfigClientCertificate</a></code> | client_certificate block. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.decryptedCredential">decryptedCredential</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential">IntegrationsAuthConfigDecryptedCredential</a></code> | decrypted_credential block. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.description">description</a></code> | <code>string</code> | A description of the auth config. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.expiryNotificationDuration">expiryNotificationDuration</a></code> | <code>string[]</code> | User can define the time to receive notification after which the auth config becomes invalid. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#id IntegrationsAuthConfig#id}. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.overrideValidTime">overrideValidTime</a></code> | <code>string</code> | User provided expiry time to override. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#project IntegrationsAuthConfig#project}. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts">IntegrationsAuthConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.visibility">visibility</a></code> | <code>string</code> | The visibility of the auth config. Possible values: ["PRIVATE", "CLIENT_VISIBLE"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The name of the auth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#display_name IntegrationsAuthConfig#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location in which client needs to be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#location IntegrationsAuthConfig#location}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: IntegrationsAuthConfigClientCertificate;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate">IntegrationsAuthConfigClientCertificate</a>

client_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#client_certificate IntegrationsAuthConfig#client_certificate}

---

##### `decryptedCredential`<sup>Optional</sup> <a name="decryptedCredential" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.decryptedCredential"></a>

```typescript
public readonly decryptedCredential: IntegrationsAuthConfigDecryptedCredential;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential">IntegrationsAuthConfigDecryptedCredential</a>

decrypted_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#decrypted_credential IntegrationsAuthConfig#decrypted_credential}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the auth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#description IntegrationsAuthConfig#description}

---

##### `expiryNotificationDuration`<sup>Optional</sup> <a name="expiryNotificationDuration" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.expiryNotificationDuration"></a>

```typescript
public readonly expiryNotificationDuration: string[];
```

- *Type:* string[]

User can define the time to receive notification after which the auth config becomes invalid.

Support up to 30 days. Support granularity in hours.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#expiry_notification_duration IntegrationsAuthConfig#expiry_notification_duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#id IntegrationsAuthConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overrideValidTime`<sup>Optional</sup> <a name="overrideValidTime" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.overrideValidTime"></a>

```typescript
public readonly overrideValidTime: string;
```

- *Type:* string

User provided expiry time to override.

For the example of Salesforce, username/password credentials can be valid for 6 months depending on the instance settings.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#override_valid_time IntegrationsAuthConfig#override_valid_time}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#project IntegrationsAuthConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IntegrationsAuthConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts">IntegrationsAuthConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#timeouts IntegrationsAuthConfig#timeouts}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

The visibility of the auth config. Possible values: ["PRIVATE", "CLIENT_VISIBLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#visibility IntegrationsAuthConfig#visibility}

---

### IntegrationsAuthConfigDecryptedCredential <a name="IntegrationsAuthConfigDecryptedCredential" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

const integrationsAuthConfigDecryptedCredential: integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.credentialType">credentialType</a></code> | <code>string</code> | Credential type associated with auth configs. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.authToken">authToken</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken">IntegrationsAuthConfigDecryptedCredentialAuthToken</a></code> | auth_token block. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.jwt">jwt</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt">IntegrationsAuthConfigDecryptedCredentialJwt</a></code> | jwt block. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.oauth2AuthorizationCode">oauth2AuthorizationCode</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a></code> | oauth2_authorization_code block. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.oauth2ClientCredentials">oauth2ClientCredentials</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a></code> | oauth2_client_credentials block. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken">IntegrationsAuthConfigDecryptedCredentialOidcToken</a></code> | oidc_token block. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.serviceAccountCredentials">serviceAccountCredentials</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a></code> | service_account_credentials block. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.usernameAndPassword">usernameAndPassword</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a></code> | username_and_password block. |

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

Credential type associated with auth configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#credential_type IntegrationsAuthConfig#credential_type}

---

##### `authToken`<sup>Optional</sup> <a name="authToken" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.authToken"></a>

```typescript
public readonly authToken: IntegrationsAuthConfigDecryptedCredentialAuthToken;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken">IntegrationsAuthConfigDecryptedCredentialAuthToken</a>

auth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#auth_token IntegrationsAuthConfig#auth_token}

---

##### `jwt`<sup>Optional</sup> <a name="jwt" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.jwt"></a>

```typescript
public readonly jwt: IntegrationsAuthConfigDecryptedCredentialJwt;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt">IntegrationsAuthConfigDecryptedCredentialJwt</a>

jwt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#jwt IntegrationsAuthConfig#jwt}

---

##### `oauth2AuthorizationCode`<sup>Optional</sup> <a name="oauth2AuthorizationCode" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.oauth2AuthorizationCode"></a>

```typescript
public readonly oauth2AuthorizationCode: IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a>

oauth2_authorization_code block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#oauth2_authorization_code IntegrationsAuthConfig#oauth2_authorization_code}

---

##### `oauth2ClientCredentials`<sup>Optional</sup> <a name="oauth2ClientCredentials" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.oauth2ClientCredentials"></a>

```typescript
public readonly oauth2ClientCredentials: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a>

oauth2_client_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#oauth2_client_credentials IntegrationsAuthConfig#oauth2_client_credentials}

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.oidcToken"></a>

```typescript
public readonly oidcToken: IntegrationsAuthConfigDecryptedCredentialOidcToken;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken">IntegrationsAuthConfigDecryptedCredentialOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#oidc_token IntegrationsAuthConfig#oidc_token}

---

##### `serviceAccountCredentials`<sup>Optional</sup> <a name="serviceAccountCredentials" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.serviceAccountCredentials"></a>

```typescript
public readonly serviceAccountCredentials: IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a>

service_account_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#service_account_credentials IntegrationsAuthConfig#service_account_credentials}

---

##### `usernameAndPassword`<sup>Optional</sup> <a name="usernameAndPassword" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.usernameAndPassword"></a>

```typescript
public readonly usernameAndPassword: IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a>

username_and_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#username_and_password IntegrationsAuthConfig#username_and_password}

---

### IntegrationsAuthConfigDecryptedCredentialAuthToken <a name="IntegrationsAuthConfigDecryptedCredentialAuthToken" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

const integrationsAuthConfigDecryptedCredentialAuthToken: integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken.property.token">token</a></code> | <code>string</code> | The token for the auth type. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken.property.type">type</a></code> | <code>string</code> | Authentication type, e.g. "Basic", "Bearer", etc. |

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

The token for the auth type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#token IntegrationsAuthConfig#token}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Authentication type, e.g. "Basic", "Bearer", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#type IntegrationsAuthConfig#type}

---

### IntegrationsAuthConfigDecryptedCredentialJwt <a name="IntegrationsAuthConfigDecryptedCredentialJwt" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

const integrationsAuthConfigDecryptedCredentialJwt: integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt.property.jwtHeader">jwtHeader</a></code> | <code>string</code> | Identifies which algorithm is used to generate the signature. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt.property.jwtPayload">jwtPayload</a></code> | <code>string</code> | Contains a set of claims. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt.property.secret">secret</a></code> | <code>string</code> | User's pre-shared secret to sign the token. |

---

##### `jwtHeader`<sup>Optional</sup> <a name="jwtHeader" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt.property.jwtHeader"></a>

```typescript
public readonly jwtHeader: string;
```

- *Type:* string

Identifies which algorithm is used to generate the signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#jwt_header IntegrationsAuthConfig#jwt_header}

---

##### `jwtPayload`<sup>Optional</sup> <a name="jwtPayload" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt.property.jwtPayload"></a>

```typescript
public readonly jwtPayload: string;
```

- *Type:* string

Contains a set of claims.

The JWT specification defines seven Registered Claim Names which are the standard fields commonly included in tokens. Custom claims are usually also included, depending on the purpose of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#jwt_payload IntegrationsAuthConfig#jwt_payload}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

User's pre-shared secret to sign the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#secret IntegrationsAuthConfig#secret}

---

### IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode <a name="IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

const integrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode: integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.authEndpoint">authEndpoint</a></code> | <code>string</code> | The auth url endpoint to send the auth code request to. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.clientId">clientId</a></code> | <code>string</code> | The client's id. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.clientSecret">clientSecret</a></code> | <code>string</code> | The client's secret. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.scope">scope</a></code> | <code>string</code> | A space-delimited list of requested scope permissions. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | The token url endpoint to send the token request to. |

---

##### `authEndpoint`<sup>Optional</sup> <a name="authEndpoint" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.authEndpoint"></a>

```typescript
public readonly authEndpoint: string;
```

- *Type:* string

The auth url endpoint to send the auth code request to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#auth_endpoint IntegrationsAuthConfig#auth_endpoint}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client's id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#client_id IntegrationsAuthConfig#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The client's secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#client_secret IntegrationsAuthConfig#client_secret}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

A space-delimited list of requested scope permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#scope IntegrationsAuthConfig#scope}

---

##### `tokenEndpoint`<sup>Optional</sup> <a name="tokenEndpoint" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

The token url endpoint to send the token request to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#token_endpoint IntegrationsAuthConfig#token_endpoint}

---

### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

const integrationsAuthConfigDecryptedCredentialOauth2ClientCredentials: integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.clientId">clientId</a></code> | <code>string</code> | The client's ID. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.clientSecret">clientSecret</a></code> | <code>string</code> | The client's secret. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.requestType">requestType</a></code> | <code>string</code> | Represent how to pass parameters to fetch access token Possible values: ["REQUEST_TYPE_UNSPECIFIED", "REQUEST_BODY", "QUERY_PARAMETERS", "ENCODED_HEADER"]. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.scope">scope</a></code> | <code>string</code> | A space-delimited list of requested scope permissions. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | The token endpoint is used by the client to obtain an access token by presenting its authorization grant or refresh token. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.tokenParams">tokenParams</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a></code> | token_params block. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client's ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#client_id IntegrationsAuthConfig#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The client's secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#client_secret IntegrationsAuthConfig#client_secret}

---

##### `requestType`<sup>Optional</sup> <a name="requestType" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.requestType"></a>

```typescript
public readonly requestType: string;
```

- *Type:* string

Represent how to pass parameters to fetch access token Possible values: ["REQUEST_TYPE_UNSPECIFIED", "REQUEST_BODY", "QUERY_PARAMETERS", "ENCODED_HEADER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#request_type IntegrationsAuthConfig#request_type}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

A space-delimited list of requested scope permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#scope IntegrationsAuthConfig#scope}

---

##### `tokenEndpoint`<sup>Optional</sup> <a name="tokenEndpoint" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

The token endpoint is used by the client to obtain an access token by presenting its authorization grant or refresh token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#token_endpoint IntegrationsAuthConfig#token_endpoint}

---

##### `tokenParams`<sup>Optional</sup> <a name="tokenParams" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.tokenParams"></a>

```typescript
public readonly tokenParams: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a>

token_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#token_params IntegrationsAuthConfig#token_params}

---

### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

const integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams: integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams.property.entries">entries</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>[]</code> | entries block. |

---

##### `entries`<sup>Optional</sup> <a name="entries" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams.property.entries"></a>

```typescript
public readonly entries: IResolvable | IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>[]

entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#entries IntegrationsAuthConfig#entries}

---

### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

const integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries: integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.property.key">key</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a></code> | key block. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.property.value">value</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a></code> | value block. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.property.key"></a>

```typescript
public readonly key: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a>

key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#key IntegrationsAuthConfig#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.property.value"></a>

```typescript
public readonly value: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#value IntegrationsAuthConfig#value}

---

### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

const integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey: integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey.property.literalValue">literalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a></code> | literal_value block. |

---

##### `literalValue`<sup>Optional</sup> <a name="literalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey.property.literalValue"></a>

```typescript
public readonly literalValue: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a>

literal_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#literal_value IntegrationsAuthConfig#literal_value}

---

### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

const integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue: integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue.property.stringValue">stringValue</a></code> | <code>string</code> | String. |

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

String.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#string_value IntegrationsAuthConfig#string_value}

---

### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

const integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue: integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue.property.literalValue">literalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a></code> | literal_value block. |

---

##### `literalValue`<sup>Optional</sup> <a name="literalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue.property.literalValue"></a>

```typescript
public readonly literalValue: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a>

literal_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#literal_value IntegrationsAuthConfig#literal_value}

---

### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

const integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue: integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue.property.stringValue">stringValue</a></code> | <code>string</code> | String. |

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

String.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#string_value IntegrationsAuthConfig#string_value}

---

### IntegrationsAuthConfigDecryptedCredentialOidcToken <a name="IntegrationsAuthConfigDecryptedCredentialOidcToken" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

const integrationsAuthConfigDecryptedCredentialOidcToken: integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken.property.audience">audience</a></code> | <code>string</code> | Audience to be used when generating OIDC token. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | The service account email to be used as the identity for the token. |

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

Audience to be used when generating OIDC token.

The audience claim identifies the recipients that the JWT is intended for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#audience IntegrationsAuthConfig#audience}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

The service account email to be used as the identity for the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#service_account_email IntegrationsAuthConfig#service_account_email}

---

### IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials <a name="IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

const integrationsAuthConfigDecryptedCredentialServiceAccountCredentials: integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.property.scope">scope</a></code> | <code>string</code> | A space-delimited list of requested scope permissions. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Name of the service account that has the permission to make the request. |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

A space-delimited list of requested scope permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#scope IntegrationsAuthConfig#scope}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Name of the service account that has the permission to make the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#service_account IntegrationsAuthConfig#service_account}

---

### IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword <a name="IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

const integrationsAuthConfigDecryptedCredentialUsernameAndPassword: integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.property.password">password</a></code> | <code>string</code> | Password to be used. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.property.username">username</a></code> | <code>string</code> | Username to be used. |

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#password IntegrationsAuthConfig#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#username IntegrationsAuthConfig#username}

---

### IntegrationsAuthConfigTimeouts <a name="IntegrationsAuthConfigTimeouts" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

const integrationsAuthConfigTimeouts: integrationsAuthConfig.IntegrationsAuthConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#create IntegrationsAuthConfig#create}. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#delete IntegrationsAuthConfig#delete}. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#update IntegrationsAuthConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#create IntegrationsAuthConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#delete IntegrationsAuthConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/integrations_auth_config#update IntegrationsAuthConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationsAuthConfigClientCertificateOutputReference <a name="IntegrationsAuthConfigClientCertificateOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

new integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.resetPassphrase">resetPassphrase</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassphrase` <a name="resetPassphrase" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.resetPassphrase"></a>

```typescript
public resetPassphrase(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.encryptedPrivateKeyInput">encryptedPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.passphraseInput">passphraseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.sslCertificateInput">sslCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.encryptedPrivateKey">encryptedPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.passphrase">passphrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.sslCertificate">sslCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate">IntegrationsAuthConfigClientCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptedPrivateKeyInput`<sup>Optional</sup> <a name="encryptedPrivateKeyInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.encryptedPrivateKeyInput"></a>

```typescript
public readonly encryptedPrivateKeyInput: string;
```

- *Type:* string

---

##### `passphraseInput`<sup>Optional</sup> <a name="passphraseInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.passphraseInput"></a>

```typescript
public readonly passphraseInput: string;
```

- *Type:* string

---

##### `sslCertificateInput`<sup>Optional</sup> <a name="sslCertificateInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.sslCertificateInput"></a>

```typescript
public readonly sslCertificateInput: string;
```

- *Type:* string

---

##### `encryptedPrivateKey`<sup>Required</sup> <a name="encryptedPrivateKey" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.encryptedPrivateKey"></a>

```typescript
public readonly encryptedPrivateKey: string;
```

- *Type:* string

---

##### `passphrase`<sup>Required</sup> <a name="passphrase" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.passphrase"></a>

```typescript
public readonly passphrase: string;
```

- *Type:* string

---

##### `sslCertificate`<sup>Required</sup> <a name="sslCertificate" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.sslCertificate"></a>

```typescript
public readonly sslCertificate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationsAuthConfigClientCertificate;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate">IntegrationsAuthConfigClientCertificate</a>

---


### IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

new integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToken` <a name="resetToken" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken">IntegrationsAuthConfigDecryptedCredentialAuthToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationsAuthConfigDecryptedCredentialAuthToken;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken">IntegrationsAuthConfigDecryptedCredentialAuthToken</a>

---


### IntegrationsAuthConfigDecryptedCredentialJwtOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialJwtOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

new integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetJwtHeader">resetJwtHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetJwtPayload">resetJwtPayload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetSecret">resetSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJwtHeader` <a name="resetJwtHeader" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetJwtHeader"></a>

```typescript
public resetJwtHeader(): void
```

##### `resetJwtPayload` <a name="resetJwtPayload" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetJwtPayload"></a>

```typescript
public resetJwtPayload(): void
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetSecret"></a>

```typescript
public resetSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwt">jwt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtHeaderInput">jwtHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtPayloadInput">jwtPayloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtHeader">jwtHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtPayload">jwtPayload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt">IntegrationsAuthConfigDecryptedCredentialJwt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jwt`<sup>Required</sup> <a name="jwt" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwt"></a>

```typescript
public readonly jwt: string;
```

- *Type:* string

---

##### `jwtHeaderInput`<sup>Optional</sup> <a name="jwtHeaderInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtHeaderInput"></a>

```typescript
public readonly jwtHeaderInput: string;
```

- *Type:* string

---

##### `jwtPayloadInput`<sup>Optional</sup> <a name="jwtPayloadInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtPayloadInput"></a>

```typescript
public readonly jwtPayloadInput: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `jwtHeader`<sup>Required</sup> <a name="jwtHeader" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtHeader"></a>

```typescript
public readonly jwtHeader: string;
```

- *Type:* string

---

##### `jwtPayload`<sup>Required</sup> <a name="jwtPayload" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtPayload"></a>

```typescript
public readonly jwtPayload: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationsAuthConfigDecryptedCredentialJwt;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt">IntegrationsAuthConfigDecryptedCredentialJwt</a>

---


### IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

new integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetAuthEndpoint">resetAuthEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetTokenEndpoint">resetTokenEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthEndpoint` <a name="resetAuthEndpoint" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetAuthEndpoint"></a>

```typescript
public resetAuthEndpoint(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetTokenEndpoint` <a name="resetTokenEndpoint" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetTokenEndpoint"></a>

```typescript
public resetTokenEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.authEndpointInput">authEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.authEndpoint">authEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authEndpointInput`<sup>Optional</sup> <a name="authEndpointInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.authEndpointInput"></a>

```typescript
public readonly authEndpointInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.tokenEndpointInput"></a>

```typescript
public readonly tokenEndpointInput: string;
```

- *Type:* string

---

##### `authEndpoint`<sup>Required</sup> <a name="authEndpoint" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.authEndpoint"></a>

```typescript
public readonly authEndpoint: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a>

---


### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

new integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.putTokenParams">putTokenParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetRequestType">resetRequestType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetTokenEndpoint">resetTokenEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetTokenParams">resetTokenParams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTokenParams` <a name="putTokenParams" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.putTokenParams"></a>

```typescript
public putTokenParams(value: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.putTokenParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a>

---

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetRequestType` <a name="resetRequestType" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetRequestType"></a>

```typescript
public resetRequestType(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetTokenEndpoint` <a name="resetTokenEndpoint" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetTokenEndpoint"></a>

```typescript
public resetTokenEndpoint(): void
```

##### `resetTokenParams` <a name="resetTokenParams" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetTokenParams"></a>

```typescript
public resetTokenParams(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenParams">tokenParams</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.requestTypeInput">requestTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenParamsInput">tokenParamsInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.requestType">requestType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tokenParams`<sup>Required</sup> <a name="tokenParams" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenParams"></a>

```typescript
public readonly tokenParams: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference</a>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `requestTypeInput`<sup>Optional</sup> <a name="requestTypeInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.requestTypeInput"></a>

```typescript
public readonly requestTypeInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenEndpointInput"></a>

```typescript
public readonly tokenEndpointInput: string;
```

- *Type:* string

---

##### `tokenParamsInput`<sup>Optional</sup> <a name="tokenParamsInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenParamsInput"></a>

```typescript
public readonly tokenParamsInput: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `requestType`<sup>Required</sup> <a name="requestType" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.requestType"></a>

```typescript
public readonly requestType: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a>

---


### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

new integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStringValue` <a name="resetStringValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.resetStringValue"></a>

```typescript
public resetStringValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.stringValueInput"></a>

```typescript
public readonly stringValueInput: string;
```

- *Type:* string

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a>

---


### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

new integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.putLiteralValue">putLiteralValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.resetLiteralValue">resetLiteralValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLiteralValue` <a name="putLiteralValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.putLiteralValue"></a>

```typescript
public putLiteralValue(value: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.putLiteralValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a>

---

##### `resetLiteralValue` <a name="resetLiteralValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.resetLiteralValue"></a>

```typescript
public resetLiteralValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.literalValue">literalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.literalValueInput">literalValueInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `literalValue`<sup>Required</sup> <a name="literalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.literalValue"></a>

```typescript
public readonly literalValue: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference</a>

---

##### `literalValueInput`<sup>Optional</sup> <a name="literalValueInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.literalValueInput"></a>

```typescript
public readonly literalValueInput: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a>

---


### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

new integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.get"></a>

```typescript
public get(index: number): IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>[]

---


### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

new integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putKey">putKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKey` <a name="putKey" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putKey"></a>

```typescript
public putKey(value: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a>

---

##### `putValue` <a name="putValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putValue"></a>

```typescript
public putValue(value: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a>

---

##### `resetKey` <a name="resetKey" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.key">key</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.keyInput">keyInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.valueInput">valueInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.key"></a>

```typescript
public readonly key: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.value"></a>

```typescript
public readonly value: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference</a>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>

---


### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

new integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStringValue` <a name="resetStringValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.resetStringValue"></a>

```typescript
public resetStringValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.stringValueInput"></a>

```typescript
public readonly stringValueInput: string;
```

- *Type:* string

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a>

---


### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

new integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.putLiteralValue">putLiteralValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.resetLiteralValue">resetLiteralValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLiteralValue` <a name="putLiteralValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.putLiteralValue"></a>

```typescript
public putLiteralValue(value: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.putLiteralValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a>

---

##### `resetLiteralValue` <a name="resetLiteralValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.resetLiteralValue"></a>

```typescript
public resetLiteralValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.literalValue">literalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.literalValueInput">literalValueInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `literalValue`<sup>Required</sup> <a name="literalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.literalValue"></a>

```typescript
public readonly literalValue: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference</a>

---

##### `literalValueInput`<sup>Optional</sup> <a name="literalValueInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.literalValueInput"></a>

```typescript
public readonly literalValueInput: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a>

---


### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

new integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.putEntries">putEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.resetEntries">resetEntries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEntries` <a name="putEntries" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.putEntries"></a>

```typescript
public putEntries(value: IResolvable | IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.putEntries.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>[]

---

##### `resetEntries` <a name="resetEntries" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.resetEntries"></a>

```typescript
public resetEntries(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.entries">entries</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.entriesInput">entriesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.entries"></a>

```typescript
public readonly entries: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList</a>

---

##### `entriesInput`<sup>Optional</sup> <a name="entriesInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.entriesInput"></a>

```typescript
public readonly entriesInput: IResolvable | IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a>

---


### IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

new integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resetAudience">resetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resetAudience"></a>

```typescript
public resetAudience(): void
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resetServiceAccountEmail"></a>

```typescript
public resetServiceAccountEmail(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.tokenExpireTime">tokenExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.audienceInput">audienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken">IntegrationsAuthConfigDecryptedCredentialOidcToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `tokenExpireTime`<sup>Required</sup> <a name="tokenExpireTime" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.tokenExpireTime"></a>

```typescript
public readonly tokenExpireTime: string;
```

- *Type:* string

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.audienceInput"></a>

```typescript
public readonly audienceInput: string;
```

- *Type:* string

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationsAuthConfigDecryptedCredentialOidcToken;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken">IntegrationsAuthConfigDecryptedCredentialOidcToken</a>

---


### IntegrationsAuthConfigDecryptedCredentialOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

new integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putAuthToken">putAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putJwt">putJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2AuthorizationCode">putOauth2AuthorizationCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2ClientCredentials">putOauth2ClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putOidcToken">putOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putServiceAccountCredentials">putServiceAccountCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putUsernameAndPassword">putUsernameAndPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetAuthToken">resetAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetJwt">resetJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetOauth2AuthorizationCode">resetOauth2AuthorizationCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetOauth2ClientCredentials">resetOauth2ClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetOidcToken">resetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetServiceAccountCredentials">resetServiceAccountCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetUsernameAndPassword">resetUsernameAndPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthToken` <a name="putAuthToken" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putAuthToken"></a>

```typescript
public putAuthToken(value: IntegrationsAuthConfigDecryptedCredentialAuthToken): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putAuthToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken">IntegrationsAuthConfigDecryptedCredentialAuthToken</a>

---

##### `putJwt` <a name="putJwt" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putJwt"></a>

```typescript
public putJwt(value: IntegrationsAuthConfigDecryptedCredentialJwt): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putJwt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt">IntegrationsAuthConfigDecryptedCredentialJwt</a>

---

##### `putOauth2AuthorizationCode` <a name="putOauth2AuthorizationCode" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2AuthorizationCode"></a>

```typescript
public putOauth2AuthorizationCode(value: IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2AuthorizationCode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a>

---

##### `putOauth2ClientCredentials` <a name="putOauth2ClientCredentials" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2ClientCredentials"></a>

```typescript
public putOauth2ClientCredentials(value: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2ClientCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a>

---

##### `putOidcToken` <a name="putOidcToken" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putOidcToken"></a>

```typescript
public putOidcToken(value: IntegrationsAuthConfigDecryptedCredentialOidcToken): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putOidcToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken">IntegrationsAuthConfigDecryptedCredentialOidcToken</a>

---

##### `putServiceAccountCredentials` <a name="putServiceAccountCredentials" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putServiceAccountCredentials"></a>

```typescript
public putServiceAccountCredentials(value: IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putServiceAccountCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a>

---

##### `putUsernameAndPassword` <a name="putUsernameAndPassword" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putUsernameAndPassword"></a>

```typescript
public putUsernameAndPassword(value: IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putUsernameAndPassword.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a>

---

##### `resetAuthToken` <a name="resetAuthToken" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetAuthToken"></a>

```typescript
public resetAuthToken(): void
```

##### `resetJwt` <a name="resetJwt" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetJwt"></a>

```typescript
public resetJwt(): void
```

##### `resetOauth2AuthorizationCode` <a name="resetOauth2AuthorizationCode" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetOauth2AuthorizationCode"></a>

```typescript
public resetOauth2AuthorizationCode(): void
```

##### `resetOauth2ClientCredentials` <a name="resetOauth2ClientCredentials" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetOauth2ClientCredentials"></a>

```typescript
public resetOauth2ClientCredentials(): void
```

##### `resetOidcToken` <a name="resetOidcToken" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetOidcToken"></a>

```typescript
public resetOidcToken(): void
```

##### `resetServiceAccountCredentials` <a name="resetServiceAccountCredentials" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetServiceAccountCredentials"></a>

```typescript
public resetServiceAccountCredentials(): void
```

##### `resetUsernameAndPassword` <a name="resetUsernameAndPassword" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetUsernameAndPassword"></a>

```typescript
public resetUsernameAndPassword(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.authToken">authToken</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference">IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.jwt">jwt</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference">IntegrationsAuthConfigDecryptedCredentialJwtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2AuthorizationCode">oauth2AuthorizationCode</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2ClientCredentials">oauth2ClientCredentials</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference">IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.serviceAccountCredentials">serviceAccountCredentials</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference">IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.usernameAndPassword">usernameAndPassword</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference">IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.authTokenInput">authTokenInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken">IntegrationsAuthConfigDecryptedCredentialAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.credentialTypeInput">credentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.jwtInput">jwtInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt">IntegrationsAuthConfigDecryptedCredentialJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2AuthorizationCodeInput">oauth2AuthorizationCodeInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2ClientCredentialsInput">oauth2ClientCredentialsInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.oidcTokenInput">oidcTokenInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken">IntegrationsAuthConfigDecryptedCredentialOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.serviceAccountCredentialsInput">serviceAccountCredentialsInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.usernameAndPasswordInput">usernameAndPasswordInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.credentialType">credentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential">IntegrationsAuthConfigDecryptedCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authToken`<sup>Required</sup> <a name="authToken" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.authToken"></a>

```typescript
public readonly authToken: IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference">IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference</a>

---

##### `jwt`<sup>Required</sup> <a name="jwt" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.jwt"></a>

```typescript
public readonly jwt: IntegrationsAuthConfigDecryptedCredentialJwtOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference">IntegrationsAuthConfigDecryptedCredentialJwtOutputReference</a>

---

##### `oauth2AuthorizationCode`<sup>Required</sup> <a name="oauth2AuthorizationCode" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2AuthorizationCode"></a>

```typescript
public readonly oauth2AuthorizationCode: IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference</a>

---

##### `oauth2ClientCredentials`<sup>Required</sup> <a name="oauth2ClientCredentials" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2ClientCredentials"></a>

```typescript
public readonly oauth2ClientCredentials: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference</a>

---

##### `oidcToken`<sup>Required</sup> <a name="oidcToken" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.oidcToken"></a>

```typescript
public readonly oidcToken: IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference">IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference</a>

---

##### `serviceAccountCredentials`<sup>Required</sup> <a name="serviceAccountCredentials" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.serviceAccountCredentials"></a>

```typescript
public readonly serviceAccountCredentials: IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference">IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference</a>

---

##### `usernameAndPassword`<sup>Required</sup> <a name="usernameAndPassword" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.usernameAndPassword"></a>

```typescript
public readonly usernameAndPassword: IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference">IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference</a>

---

##### `authTokenInput`<sup>Optional</sup> <a name="authTokenInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.authTokenInput"></a>

```typescript
public readonly authTokenInput: IntegrationsAuthConfigDecryptedCredentialAuthToken;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken">IntegrationsAuthConfigDecryptedCredentialAuthToken</a>

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.credentialTypeInput"></a>

```typescript
public readonly credentialTypeInput: string;
```

- *Type:* string

---

##### `jwtInput`<sup>Optional</sup> <a name="jwtInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.jwtInput"></a>

```typescript
public readonly jwtInput: IntegrationsAuthConfigDecryptedCredentialJwt;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt">IntegrationsAuthConfigDecryptedCredentialJwt</a>

---

##### `oauth2AuthorizationCodeInput`<sup>Optional</sup> <a name="oauth2AuthorizationCodeInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2AuthorizationCodeInput"></a>

```typescript
public readonly oauth2AuthorizationCodeInput: IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a>

---

##### `oauth2ClientCredentialsInput`<sup>Optional</sup> <a name="oauth2ClientCredentialsInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2ClientCredentialsInput"></a>

```typescript
public readonly oauth2ClientCredentialsInput: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a>

---

##### `oidcTokenInput`<sup>Optional</sup> <a name="oidcTokenInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.oidcTokenInput"></a>

```typescript
public readonly oidcTokenInput: IntegrationsAuthConfigDecryptedCredentialOidcToken;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken">IntegrationsAuthConfigDecryptedCredentialOidcToken</a>

---

##### `serviceAccountCredentialsInput`<sup>Optional</sup> <a name="serviceAccountCredentialsInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.serviceAccountCredentialsInput"></a>

```typescript
public readonly serviceAccountCredentialsInput: IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a>

---

##### `usernameAndPasswordInput`<sup>Optional</sup> <a name="usernameAndPasswordInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.usernameAndPasswordInput"></a>

```typescript
public readonly usernameAndPasswordInput: IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a>

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationsAuthConfigDecryptedCredential;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential">IntegrationsAuthConfigDecryptedCredential</a>

---


### IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

new integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScope` <a name="resetScope" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a>

---


### IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

new integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a>

---


### IntegrationsAuthConfigTimeoutsOutputReference <a name="IntegrationsAuthConfigTimeoutsOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { integrationsAuthConfig } from '@cdktf/provider-google'

new integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts">IntegrationsAuthConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationsAuthConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts">IntegrationsAuthConfigTimeouts</a>

---



