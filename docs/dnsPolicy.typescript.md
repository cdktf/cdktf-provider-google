# `dnsPolicy` Submodule <a name="`dnsPolicy` Submodule" id="@cdktf/provider-google.dnsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsPolicy <a name="DnsPolicy" id="@cdktf/provider-google.dnsPolicy.DnsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/dns_policy google_dns_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer"></a>

```typescript
import { dnsPolicy } from '@cdktf/provider-google'

new dnsPolicy.DnsPolicy(scope: Construct, id: string, config: DnsPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig">DnsPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig">DnsPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.putAlternativeNameServerConfig">putAlternativeNameServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.putNetworks">putNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetAlternativeNameServerConfig">resetAlternativeNameServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetEnableInboundForwarding">resetEnableInboundForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetEnableLogging">resetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetNetworks">resetNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlternativeNameServerConfig` <a name="putAlternativeNameServerConfig" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.putAlternativeNameServerConfig"></a>

```typescript
public putAlternativeNameServerConfig(value: DnsPolicyAlternativeNameServerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.putAlternativeNameServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig">DnsPolicyAlternativeNameServerConfig</a>

---

##### `putNetworks` <a name="putNetworks" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.putNetworks"></a>

```typescript
public putNetworks(value: IResolvable | DnsPolicyNetworks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.putNetworks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks">DnsPolicyNetworks</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: DnsPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts">DnsPolicyTimeouts</a>

---

##### `resetAlternativeNameServerConfig` <a name="resetAlternativeNameServerConfig" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetAlternativeNameServerConfig"></a>

```typescript
public resetAlternativeNameServerConfig(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableInboundForwarding` <a name="resetEnableInboundForwarding" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetEnableInboundForwarding"></a>

```typescript
public resetEnableInboundForwarding(): void
```

##### `resetEnableLogging` <a name="resetEnableLogging" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetEnableLogging"></a>

```typescript
public resetEnableLogging(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetworks` <a name="resetNetworks" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetNetworks"></a>

```typescript
public resetNetworks(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DnsPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.isConstruct"></a>

```typescript
import { dnsPolicy } from '@cdktf/provider-google'

dnsPolicy.DnsPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.isTerraformElement"></a>

```typescript
import { dnsPolicy } from '@cdktf/provider-google'

dnsPolicy.DnsPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.isTerraformResource"></a>

```typescript
import { dnsPolicy } from '@cdktf/provider-google'

dnsPolicy.DnsPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.generateConfigForImport"></a>

```typescript
import { dnsPolicy } from '@cdktf/provider-google'

dnsPolicy.DnsPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DnsPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DnsPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DnsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/dns_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DnsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.alternativeNameServerConfig">alternativeNameServerConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference">DnsPolicyAlternativeNameServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList">DnsPolicyNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference">DnsPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.alternativeNameServerConfigInput">alternativeNameServerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig">DnsPolicyAlternativeNameServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.enableInboundForwardingInput">enableInboundForwardingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.enableLoggingInput">enableLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.networksInput">networksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks">DnsPolicyNetworks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts">DnsPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.enableInboundForwarding">enableInboundForwarding</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alternativeNameServerConfig`<sup>Required</sup> <a name="alternativeNameServerConfig" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.alternativeNameServerConfig"></a>

```typescript
public readonly alternativeNameServerConfig: DnsPolicyAlternativeNameServerConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference">DnsPolicyAlternativeNameServerConfigOutputReference</a>

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.networks"></a>

```typescript
public readonly networks: DnsPolicyNetworksList;
```

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList">DnsPolicyNetworksList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: DnsPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference">DnsPolicyTimeoutsOutputReference</a>

---

##### `alternativeNameServerConfigInput`<sup>Optional</sup> <a name="alternativeNameServerConfigInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.alternativeNameServerConfigInput"></a>

```typescript
public readonly alternativeNameServerConfigInput: DnsPolicyAlternativeNameServerConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig">DnsPolicyAlternativeNameServerConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enableInboundForwardingInput`<sup>Optional</sup> <a name="enableInboundForwardingInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.enableInboundForwardingInput"></a>

```typescript
public readonly enableInboundForwardingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableLoggingInput`<sup>Optional</sup> <a name="enableLoggingInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.enableLoggingInput"></a>

```typescript
public readonly enableLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networksInput`<sup>Optional</sup> <a name="networksInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.networksInput"></a>

```typescript
public readonly networksInput: IResolvable | DnsPolicyNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks">DnsPolicyNetworks</a>[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DnsPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts">DnsPolicyTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enableInboundForwarding`<sup>Required</sup> <a name="enableInboundForwarding" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.enableInboundForwarding"></a>

```typescript
public readonly enableInboundForwarding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dnsPolicy.DnsPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsPolicyAlternativeNameServerConfig <a name="DnsPolicyAlternativeNameServerConfig" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig.Initializer"></a>

```typescript
import { dnsPolicy } from '@cdktf/provider-google'

const dnsPolicyAlternativeNameServerConfig: dnsPolicy.DnsPolicyAlternativeNameServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig.property.targetNameServers">targetNameServers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers">DnsPolicyAlternativeNameServerConfigTargetNameServers</a>[]</code> | target_name_servers block. |

---

##### `targetNameServers`<sup>Required</sup> <a name="targetNameServers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig.property.targetNameServers"></a>

```typescript
public readonly targetNameServers: IResolvable | DnsPolicyAlternativeNameServerConfigTargetNameServers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers">DnsPolicyAlternativeNameServerConfigTargetNameServers</a>[]

target_name_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/dns_policy#target_name_servers DnsPolicy#target_name_servers}

---

### DnsPolicyAlternativeNameServerConfigTargetNameServers <a name="DnsPolicyAlternativeNameServerConfigTargetNameServers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers.Initializer"></a>

```typescript
import { dnsPolicy } from '@cdktf/provider-google'

const dnsPolicyAlternativeNameServerConfigTargetNameServers: dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers.property.ipv4Address">ipv4Address</a></code> | <code>string</code> | IPv4 address to forward to. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers.property.forwardingPath">forwardingPath</a></code> | <code>string</code> | Forwarding path for this TargetNameServer. |

---

##### `ipv4Address`<sup>Required</sup> <a name="ipv4Address" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers.property.ipv4Address"></a>

```typescript
public readonly ipv4Address: string;
```

- *Type:* string

IPv4 address to forward to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/dns_policy#ipv4_address DnsPolicy#ipv4_address}

---

##### `forwardingPath`<sup>Optional</sup> <a name="forwardingPath" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers.property.forwardingPath"></a>

```typescript
public readonly forwardingPath: string;
```

- *Type:* string

Forwarding path for this TargetNameServer.

If unset or 'default' Cloud DNS will make forwarding
decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
to the Internet. When set to 'private', Cloud DNS will always send queries through VPC for this target Possible values: ["default", "private"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/dns_policy#forwarding_path DnsPolicy#forwarding_path}

---

### DnsPolicyConfig <a name="DnsPolicyConfig" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.Initializer"></a>

```typescript
import { dnsPolicy } from '@cdktf/provider-google'

const dnsPolicyConfig: dnsPolicy.DnsPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.name">name</a></code> | <code>string</code> | User assigned name for this policy. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.alternativeNameServerConfig">alternativeNameServerConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig">DnsPolicyAlternativeNameServerConfig</a></code> | alternative_name_server_config block. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.description">description</a></code> | <code>string</code> | A textual description field. Defaults to 'Managed by Terraform'. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.enableInboundForwarding">enableInboundForwarding</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/dns_policy#id DnsPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.networks">networks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks">DnsPolicyNetworks</a>[]</code> | networks block. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/dns_policy#project DnsPolicy#project}. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts">DnsPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

User assigned name for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/dns_policy#name DnsPolicy#name}

---

##### `alternativeNameServerConfig`<sup>Optional</sup> <a name="alternativeNameServerConfig" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.alternativeNameServerConfig"></a>

```typescript
public readonly alternativeNameServerConfig: DnsPolicyAlternativeNameServerConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig">DnsPolicyAlternativeNameServerConfig</a>

alternative_name_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/dns_policy#alternative_name_server_config DnsPolicy#alternative_name_server_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A textual description field. Defaults to 'Managed by Terraform'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/dns_policy#description DnsPolicy#description}

---

##### `enableInboundForwarding`<sup>Optional</sup> <a name="enableInboundForwarding" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.enableInboundForwarding"></a>

```typescript
public readonly enableInboundForwarding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections.

When enabled, a
virtual IP address will be allocated from each of the sub-networks
that are bound to this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/dns_policy#enable_inbound_forwarding DnsPolicy#enable_inbound_forwarding}

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/dns_policy#enable_logging DnsPolicy#enable_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/dns_policy#id DnsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.networks"></a>

```typescript
public readonly networks: IResolvable | DnsPolicyNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks">DnsPolicyNetworks</a>[]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/dns_policy#networks DnsPolicy#networks}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/dns_policy#project DnsPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dnsPolicy.DnsPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DnsPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts">DnsPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/dns_policy#timeouts DnsPolicy#timeouts}

---

### DnsPolicyNetworks <a name="DnsPolicyNetworks" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks.Initializer"></a>

```typescript
import { dnsPolicy } from '@cdktf/provider-google'

const dnsPolicyNetworks: dnsPolicy.DnsPolicyNetworks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks.property.networkUrl">networkUrl</a></code> | <code>string</code> | The id or fully qualified URL of the VPC network to forward queries to. |

---

##### `networkUrl`<sup>Required</sup> <a name="networkUrl" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks.property.networkUrl"></a>

```typescript
public readonly networkUrl: string;
```

- *Type:* string

The id or fully qualified URL of the VPC network to forward queries to.

This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/dns_policy#network_url DnsPolicy#network_url}

---

### DnsPolicyTimeouts <a name="DnsPolicyTimeouts" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts.Initializer"></a>

```typescript
import { dnsPolicy } from '@cdktf/provider-google'

const dnsPolicyTimeouts: dnsPolicy.DnsPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/dns_policy#create DnsPolicy#create}. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/dns_policy#delete DnsPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/dns_policy#update DnsPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/dns_policy#create DnsPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/dns_policy#delete DnsPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/dns_policy#update DnsPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsPolicyAlternativeNameServerConfigOutputReference <a name="DnsPolicyAlternativeNameServerConfigOutputReference" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.Initializer"></a>

```typescript
import { dnsPolicy } from '@cdktf/provider-google'

new dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.putTargetNameServers">putTargetNameServers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetNameServers` <a name="putTargetNameServers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.putTargetNameServers"></a>

```typescript
public putTargetNameServers(value: IResolvable | DnsPolicyAlternativeNameServerConfigTargetNameServers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.putTargetNameServers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers">DnsPolicyAlternativeNameServerConfigTargetNameServers</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.targetNameServers">targetNameServers</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList">DnsPolicyAlternativeNameServerConfigTargetNameServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.targetNameServersInput">targetNameServersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers">DnsPolicyAlternativeNameServerConfigTargetNameServers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig">DnsPolicyAlternativeNameServerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetNameServers`<sup>Required</sup> <a name="targetNameServers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.targetNameServers"></a>

```typescript
public readonly targetNameServers: DnsPolicyAlternativeNameServerConfigTargetNameServersList;
```

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList">DnsPolicyAlternativeNameServerConfigTargetNameServersList</a>

---

##### `targetNameServersInput`<sup>Optional</sup> <a name="targetNameServersInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.targetNameServersInput"></a>

```typescript
public readonly targetNameServersInput: IResolvable | DnsPolicyAlternativeNameServerConfigTargetNameServers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers">DnsPolicyAlternativeNameServerConfigTargetNameServers</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DnsPolicyAlternativeNameServerConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfig">DnsPolicyAlternativeNameServerConfig</a>

---


### DnsPolicyAlternativeNameServerConfigTargetNameServersList <a name="DnsPolicyAlternativeNameServerConfigTargetNameServersList" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer"></a>

```typescript
import { dnsPolicy } from '@cdktf/provider-google'

new dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.get"></a>

```typescript
public get(index: number): DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers">DnsPolicyAlternativeNameServerConfigTargetNameServers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DnsPolicyAlternativeNameServerConfigTargetNameServers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers">DnsPolicyAlternativeNameServerConfigTargetNameServers</a>[]

---


### DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference <a name="DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer"></a>

```typescript
import { dnsPolicy } from '@cdktf/provider-google'

new dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.resetForwardingPath">resetForwardingPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForwardingPath` <a name="resetForwardingPath" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.resetForwardingPath"></a>

```typescript
public resetForwardingPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.forwardingPathInput">forwardingPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.ipv4AddressInput">ipv4AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.forwardingPath">forwardingPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.ipv4Address">ipv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers">DnsPolicyAlternativeNameServerConfigTargetNameServers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `forwardingPathInput`<sup>Optional</sup> <a name="forwardingPathInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.forwardingPathInput"></a>

```typescript
public readonly forwardingPathInput: string;
```

- *Type:* string

---

##### `ipv4AddressInput`<sup>Optional</sup> <a name="ipv4AddressInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.ipv4AddressInput"></a>

```typescript
public readonly ipv4AddressInput: string;
```

- *Type:* string

---

##### `forwardingPath`<sup>Required</sup> <a name="forwardingPath" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.forwardingPath"></a>

```typescript
public readonly forwardingPath: string;
```

- *Type:* string

---

##### `ipv4Address`<sup>Required</sup> <a name="ipv4Address" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.ipv4Address"></a>

```typescript
public readonly ipv4Address: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DnsPolicyAlternativeNameServerConfigTargetNameServers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyAlternativeNameServerConfigTargetNameServers">DnsPolicyAlternativeNameServerConfigTargetNameServers</a>

---


### DnsPolicyNetworksList <a name="DnsPolicyNetworksList" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.Initializer"></a>

```typescript
import { dnsPolicy } from '@cdktf/provider-google'

new dnsPolicy.DnsPolicyNetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.get"></a>

```typescript
public get(index: number): DnsPolicyNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks">DnsPolicyNetworks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DnsPolicyNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks">DnsPolicyNetworks</a>[]

---


### DnsPolicyNetworksOutputReference <a name="DnsPolicyNetworksOutputReference" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer"></a>

```typescript
import { dnsPolicy } from '@cdktf/provider-google'

new dnsPolicy.DnsPolicyNetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.networkUrlInput">networkUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.networkUrl">networkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks">DnsPolicyNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkUrlInput`<sup>Optional</sup> <a name="networkUrlInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.networkUrlInput"></a>

```typescript
public readonly networkUrlInput: string;
```

- *Type:* string

---

##### `networkUrl`<sup>Required</sup> <a name="networkUrl" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.networkUrl"></a>

```typescript
public readonly networkUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsPolicy.DnsPolicyNetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DnsPolicyNetworks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyNetworks">DnsPolicyNetworks</a>

---


### DnsPolicyTimeoutsOutputReference <a name="DnsPolicyTimeoutsOutputReference" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { dnsPolicy } from '@cdktf/provider-google'

new dnsPolicy.DnsPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts">DnsPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsPolicy.DnsPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DnsPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dnsPolicy.DnsPolicyTimeouts">DnsPolicyTimeouts</a>

---



