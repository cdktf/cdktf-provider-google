# `google_essential_contacts_contact`

Refer to the Terraform Registory for docs: [`google_essential_contacts_contact`](https://registry.terraform.io/providers/hashicorp/google/4.83.0/docs/resources/essential_contacts_contact).

# `essentialContactsContact` Submodule <a name="`essentialContactsContact` Submodule" id="@cdktf/provider-google.essentialContactsContact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EssentialContactsContact <a name="EssentialContactsContact" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.83.0/docs/resources/essential_contacts_contact google_essential_contacts_contact}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.Initializer"></a>

```typescript
import { essentialContactsContact } from '@cdktf/provider-google'

new essentialContactsContact.EssentialContactsContact(scope: Construct, id: string, config: EssentialContactsContactConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig">EssentialContactsContactConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig">EssentialContactsContactConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.putTimeouts"></a>

```typescript
public putTimeouts(value: EssentialContactsContactTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts">EssentialContactsContactTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isConstruct"></a>

```typescript
import { essentialContactsContact } from '@cdktf/provider-google'

essentialContactsContact.EssentialContactsContact.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isTerraformElement"></a>

```typescript
import { essentialContactsContact } from '@cdktf/provider-google'

essentialContactsContact.EssentialContactsContact.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isTerraformResource"></a>

```typescript
import { essentialContactsContact } from '@cdktf/provider-google'

essentialContactsContact.EssentialContactsContact.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference">EssentialContactsContactTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.languageTagInput">languageTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.notificationCategorySubscriptionsInput">notificationCategorySubscriptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts">EssentialContactsContactTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.languageTag">languageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.notificationCategorySubscriptions">notificationCategorySubscriptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.timeouts"></a>

```typescript
public readonly timeouts: EssentialContactsContactTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference">EssentialContactsContactTimeoutsOutputReference</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `languageTagInput`<sup>Optional</sup> <a name="languageTagInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.languageTagInput"></a>

```typescript
public readonly languageTagInput: string;
```

- *Type:* string

---

##### `notificationCategorySubscriptionsInput`<sup>Optional</sup> <a name="notificationCategorySubscriptionsInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.notificationCategorySubscriptionsInput"></a>

```typescript
public readonly notificationCategorySubscriptionsInput: string[];
```

- *Type:* string[]

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | EssentialContactsContactTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts">EssentialContactsContactTimeouts</a>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `languageTag`<sup>Required</sup> <a name="languageTag" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.languageTag"></a>

```typescript
public readonly languageTag: string;
```

- *Type:* string

---

##### `notificationCategorySubscriptions`<sup>Required</sup> <a name="notificationCategorySubscriptions" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.notificationCategorySubscriptions"></a>

```typescript
public readonly notificationCategorySubscriptions: string[];
```

- *Type:* string[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EssentialContactsContactConfig <a name="EssentialContactsContactConfig" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.Initializer"></a>

```typescript
import { essentialContactsContact } from '@cdktf/provider-google'

const essentialContactsContactConfig: essentialContactsContact.EssentialContactsContactConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.email">email</a></code> | <code>string</code> | The email address to send notifications to. This does not need to be a Google account. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.languageTag">languageTag</a></code> | <code>string</code> | The preferred language for notifications, as a ISO 639-1 language code. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.notificationCategorySubscriptions">notificationCategorySubscriptions</a></code> | <code>string[]</code> | The categories of notifications that the contact will receive communications for. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.parent">parent</a></code> | <code>string</code> | The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.83.0/docs/resources/essential_contacts_contact#id EssentialContactsContact#id}. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts">EssentialContactsContactTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

The email address to send notifications to. This does not need to be a Google account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.83.0/docs/resources/essential_contacts_contact#email EssentialContactsContact#email}

---

##### `languageTag`<sup>Required</sup> <a name="languageTag" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.languageTag"></a>

```typescript
public readonly languageTag: string;
```

- *Type:* string

The preferred language for notifications, as a ISO 639-1 language code.

See Supported languages for a list of supported languages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.83.0/docs/resources/essential_contacts_contact#language_tag EssentialContactsContact#language_tag}

---

##### `notificationCategorySubscriptions`<sup>Required</sup> <a name="notificationCategorySubscriptions" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.notificationCategorySubscriptions"></a>

```typescript
public readonly notificationCategorySubscriptions: string[];
```

- *Type:* string[]

The categories of notifications that the contact will receive communications for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.83.0/docs/resources/essential_contacts_contact#notification_category_subscriptions EssentialContactsContact#notification_category_subscriptions}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.83.0/docs/resources/essential_contacts_contact#parent EssentialContactsContact#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.83.0/docs/resources/essential_contacts_contact#id EssentialContactsContact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EssentialContactsContactTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts">EssentialContactsContactTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.83.0/docs/resources/essential_contacts_contact#timeouts EssentialContactsContact#timeouts}

---

### EssentialContactsContactTimeouts <a name="EssentialContactsContactTimeouts" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts.Initializer"></a>

```typescript
import { essentialContactsContact } from '@cdktf/provider-google'

const essentialContactsContactTimeouts: essentialContactsContact.EssentialContactsContactTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.83.0/docs/resources/essential_contacts_contact#create EssentialContactsContact#create}. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.83.0/docs/resources/essential_contacts_contact#delete EssentialContactsContact#delete}. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.83.0/docs/resources/essential_contacts_contact#update EssentialContactsContact#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.83.0/docs/resources/essential_contacts_contact#create EssentialContactsContact#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.83.0/docs/resources/essential_contacts_contact#delete EssentialContactsContact#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.83.0/docs/resources/essential_contacts_contact#update EssentialContactsContact#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EssentialContactsContactTimeoutsOutputReference <a name="EssentialContactsContactTimeoutsOutputReference" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.Initializer"></a>

```typescript
import { essentialContactsContact } from '@cdktf/provider-google'

new essentialContactsContact.EssentialContactsContactTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts">EssentialContactsContactTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EssentialContactsContactTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts">EssentialContactsContactTimeouts</a>

---



